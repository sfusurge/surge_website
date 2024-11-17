export interface StarRendererOptions {
    density: number; // how many stars for every 200x200px of canvas

    starColors: [string, number][]; // list of hex color codes paired to their chance of appearing.
    //Note that the chances should between 0 - 1, and sum to 1.

    starPaths: [string, number][];
    pathNameToPath: { [id: string]: Path2D | undefined };

    brightness: number; // base brightness of each star, will be implemented with alpha value
    birghtnessRange: number; // actual brightness will be chosen randomly from [brighness - range, brightness + range]

    size: number; // base size / radius of each star
    sizeRange: number; // actual size of star is from [size - range, size + range]

    period: number; // time in milliseconds that it takes for a star to created to be destroyed
    periodRange: number; // ...

    scrollScale: number;

    glowRange: number;
    glowIntensity: number;
}

interface Star {
    pathName: string;

    x: number;
    y: number; // location of star

    color: string; //hexcode

    maxBrightness: number;
    currentBrightness: string;

    removeTime: number; // timestamp to remove this star, use removeTime - currentTime to find the remaining life time.
    startTime: number; // when this star was created

    radius: number; // radius of this star as a circle
}

/**
 * Linearly interpolate between from and to, by t%
 * @param from
 * @param to
 * @param t
 */
function lerp(from: number, to: number, t: number) {
    return from + (to - from) * t;
}

/**
 * returns a random number in the range of [center - range, center + range]
 * @param center
 * @param range
 */
function randRange(center: number, range: number) {
    return center + Math.random() * range * 2 - range;
}

function mod(n: number, m: number) {
    return ((n % m) + m) % m;
}

function choseRandom<T>(options: [T, number][]) {
    const rand = Math.random();

    for (const [val, chance] of options) {
        if (rand < chance) {
            return val;
        }
    }

    return options[options.length][0];
}

function distanceLessThan(x1: number, y1: number, x2: number, y2: number, distance: number) {
    const dx = x2 - x1;
    const dy = y2 - y1;

    return dx * dx + dy * dy <= distance * distance;
}

function distance(x1: number, y1: number, x2: number, y2: number) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

export class StarRenderer {
    options: StarRendererOptions = {
        // default params for testing.
        density: 3,

        starColors: [
            ["#90d5ff", 0.1],
            ["#dab1da", 0.2],
            ["#666666", 1],
        ],
        pathNameToPath: {
            "4point": new Path2D(
                "M.1742.5458C.2162.5598.2543.5834.2856.6147C.3168.6460.3404.6841.3542.7261L.3990.8638C.4027.8741.4094.8831.4182.8896C.4270.8960.4376.8997.4485.9000C.4594.9004.4702.8975.4794.8916C.4887.8858.4959.8773.5002.8672L.5003.8669L.5015.8648L.5064.8497L.5063.8492L.5463.7262C.5591.6877.5799.6525.6074.6229L.6087.6222C.6285.6013.6513.5835.6763.5692L.6759.5687C.6919.5597.7087.5523.7261.5465L.8639.5017C.8745.4980.8837.4910.8902.4819C.8966.4727.9001.4617.9001.4505C.9001.4393.8966.4283.8902.4191C.8837.4100.8745.4030.8639.3992L.8611.3985L.7233.3537C.6815.3398.6434.3163.6122.2852C.5810.2540.5575.2160.5435.1741L.4989.0364C.4952.0258.4883.0166.4791.0100C.4699.0035.4589.0000.4476.0000C.4363.0000.4253.0035.4161.0100C.4069.0166.4000.0258.3962.0364L.3514.1741L.3503.1775C.3363.2183.3131.2554.2827.2858C.2522.3163.2151.3395.1743.3535L.0366.3983C.0260.4020.0167.4089.0101.4181C.0035.4274.0000.4384.0000.4497C.0000.4610.0035.4720.0101.4812C.0167.4904.0260.4974.0366.5010L.1742.5458Z",
            ),
            undefined: undefined,
        },
        starPaths: [
            ["4point", 0.1],
            ["undefined", 1],
        ], // undefined gives circle
        brightness: 0.8,
        birghtnessRange: 0.1,

        size: 2, //5px
        sizeRange: 1.25,

        period: 8000, // 2 seconds
        periodRange: 2000, // +/- half a second

        scrollScale: 0.6,

        glowRange: 400,
        glowIntensity: 1,
    };

    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    unthrottleRender = true;

    stars: Star[] = [];

    // track browser state for interactivity
    targetCursorX: number = 0;
    targetCursorY: number = 0;
    targetScrollY: number = 0; // dont track scrollX, assume the page never horizontally scroll.

    // lerp current value to target value each from to feel *smooth*
    // note to self to always round to int before rendering.
    currentCursorX: number = 0;
    currentCursorY: number = 0;
    currentScrollY: number = 0;
    // lerp factor is the % the above value approaches the target each second
    lerpFactor = 0.95;
    // last frame is used to calculate delta time.
    lastFrameTime = 0;
    deltaTime = 0;

    canvasWidth: number = 0;
    canvasHeight: number = 0;
    rows = 0;
    cols = 0;

    renderHandle: number = 0;

    glowGradient: CanvasGradient | undefined;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d")!;
        this.setupEvents();
        this.startRender();
    }

    startRender() {
        // properly scale canvas before rendering
        setTimeout(() => {
            this.updateWindowSize();
        }, 50);

        const desiredStarCount = Math.floor(
            this.options.density * (this.canvasWidth / 200) * (this.canvasHeight / 200),
        );

        // generate initial stars with random timings
        for (let i = 0; i < desiredStarCount; i++) {
            this.stars.push(this.generateStar(-Math.random() * this.options.period));
        }

        // create gradient for glow effect
        const glowRange = this.options.glowRange;
        this.glowGradient = this.ctx.createRadialGradient(
            glowRange / 2,
            glowRange / 2,
            0,
            glowRange / 2,
            glowRange / 2,
            this.options.glowRange * 0.5,
        );
        this.glowGradient.addColorStop(0, "#ffffff");
        this.glowGradient.addColorStop(1, "transparent");

        this.renderHandle = requestAnimationFrame(this.render.bind(this));
    }

    render(currentTime: number) {
        // calc delta time
        this.deltaTime = (currentTime - this.lastFrameTime) / 1000;
        
        // skip frame is delta time is less than some limit
        // basically restricting fps on idle
        if (!this.unthrottleRender && this.deltaTime < 0.1) {
            // force ~30fps, or 60fps when screen is repainted.
            this.renderHandle = requestAnimationFrame(this.render.bind(this));
            return;
        }
        if (this.unthrottleRender) {
            this.unthrottleRender = false;
        }

        // clear canvas to star new render
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        // really do render now
        this.renderStars(currentTime);
        this.renderGlow();

        // current frame is now last frame
        this.lastFrameTime = currentTime;

        // request to render next frame
        this.renderHandle = requestAnimationFrame(this.render.bind(this));
    }

    renderGlow() {
        this.ctx.globalCompositeOperation = "source-atop";
        this.ctx.fillStyle = this.glowGradient!;
        this.ctx.translate(this.targetCursorX - this.options.glowRange/2, this.targetCursorY- this.options.glowRange/2)
        this.ctx.fillRect(0,0, this.options.glowRange, this.options.glowRange);
        this.ctx.resetTransform()
        this.ctx.globalCompositeOperation = "source-over";

    }

    renderStars(currentTime: number) {
        this.smoothApproach(this.deltaTime);

        // number of 200x200 zones times density for each zone.
        const desiredStarCount = Math.floor(
            this.options.density * (this.canvasWidth / 200) * (this.canvasHeight / 200),
        );

        

        for (let i = 0; i < this.stars.length; i++) {
            let star = this.stars[i];
            if (star.removeTime < currentTime) {
                // star expired
                if (this.stars.length > desiredStarCount) {
                    // too many stars
                    const temp = this.stars[this.stars.length - 1];
                    this.stars[this.stars.length - 1] = star;
                    this.stars[i] = temp;
                    star = temp;
                    this.stars.pop();
                } else {
                    // not too many, just replace
                    this.stars[i] = this.generateStar(currentTime);
                    star = this.stars[i];
                }
            }

            // updates star brightness
            this.updateStar(star, currentTime);
            const y = mod(star.y - this.currentScrollY * this.options.scrollScale, this.canvasHeight);

            // this.ctx.clearRect(star.x - star.radius, y - star.radius, star.radius * 2, star.radius * 2);
            // render single star

            this.ctx.fillStyle = star.color + star.currentBrightness;
            // this.ctx.fillRect(star.x, y, star.radius, star.radius);

            const pathToPaint = this.options.pathNameToPath[star.pathName];
            if (pathToPaint === undefined) {
                this.ctx.beginPath();
                this.ctx.ellipse(star.x, y, star.radius, star.radius, 0, 0, Math.PI * 2, false);
                this.ctx.fill();
            } else {
                this.ctx.translate(star.x, y);
                this.ctx.scale(star.radius * 4, star.radius * 4);
                this.ctx.fill(pathToPaint);
                this.ctx.resetTransform();
            }
        }
        // if current number of stars is less than desired amount, then lets generate some.
        while (this.stars.length < desiredStarCount) {
            this.stars.push(this.generateStar(currentTime));
        }

        // render finished, request next frame
    }

    /**
     * adds event listeners to window in order to track interactity variables
     */
    setupEvents() {
        // WARNING client side only! will error in ssr!

        window.addEventListener("mousemove", (e: MouseEvent) => {
            this.targetCursorX = e.clientX;
            this.targetCursorY = e.clientY;
        });

        window.addEventListener("scroll", (e: Event) => {
            this.targetScrollY = window.scrollY;
        });

        window.addEventListener("resize", (e: Event) => {
            this.updateWindowSize();
        });
    }

    updateWindowSize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.canvasWidth = window.innerWidth;
        this.canvasHeight = window.innerHeight;

        // instant update scroll on initial render
        this.targetScrollY = window.scrollY;
        this.currentScrollY = this.targetScrollY;

        this.unthrottleRender = true;
    }

    smoothApproach(dt: number) {
        this.currentCursorX = lerp(this.currentCursorX, this.targetCursorX, this.lerpFactor * dt);
        this.currentCursorY = lerp(this.currentCursorY, this.targetCursorY, this.lerpFactor * dt);
        const newScroll = lerp(this.currentScrollY, this.targetScrollY, this.lerpFactor * dt);
        if (Math.abs(newScroll - this.targetScrollY) > 1) {
            this.currentScrollY = newScroll;
            this.unthrottleRender = true;
        }
      
    }

    /**
     * Updates a single star's brightness
     * @param star
     */
    updateStar(star: Star, currentTime: number) {
        // if star's life is less than half point, make it brighter, otherwise make it darker
        const lifespan = (currentTime - star.startTime) / (star.removeTime - star.startTime);
        let brightness = 0;
        if (lifespan < 0.5) {
            brightness = lerp(0, star.maxBrightness, lifespan * 2);
        } else {
            brightness = lerp(star.maxBrightness, 0, (lifespan - 0.5) * 2);
        }
        // convert brightness to hexcode
        star.currentBrightness = Math.floor(brightness * 255)
            .toString(16)
            .padStart(2, "0");
    }

    /**
     * create a new star with random parameters
     * also does 3 tries to put the star in a random empty cell, if all three attempts is a collision, then just put it where ever
     * currentTime is used to determine when to remove the star.
     * @param currentTime
     */
    generateStar(currentTime: number) {
        const star: Star = {
            pathName: choseRandom(this.options.starPaths),
            color: choseRandom(this.options.starColors),
            maxBrightness: randRange(this.options.brightness, this.options.birghtnessRange),
            currentBrightness: "00",
            radius: Math.ceil(randRange(this.options.size, this.options.sizeRange)),
            removeTime: Math.floor(currentTime + randRange(this.options.period, this.options.periodRange)),
            startTime: Math.floor(currentTime),

            // put the star in a grid, then random position within the grid cell
            x: Math.floor(this.canvasWidth * Math.random()),
            // then offset by vertical scroll to fake a scroll effect
            y: Math.floor(this.canvasHeight * Math.random()),
        };

        return star;
    }

    cleanUp() {
        console.log("cleaning up starbackgrond");

        cancelAnimationFrame(this.renderHandle);
    }
}
