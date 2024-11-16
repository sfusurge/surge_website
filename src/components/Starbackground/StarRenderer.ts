export interface StarRendererOptions {
    density: number; // how many stars for every 200x200px of canvas

    starColors: [string, number][]; // list of hex color codes paired to their chance of appearing.
    //Note that the chances should between 0 - 1, and sum to 1.

    brightness: number; // base brightness of each star, will be implemented with alpha value
    birghtnessRange: number; // actual brightness will be chosen randomly from [brighness - range, brightness + range]

    size: number; // base size / radius of each star
    sizeRange: number; // actual size of star is from [size - range, size + range]

    period: number; // time in milliseconds that it takes for a star to created to be destroyed
    periodRange: number; // ...

    scrollScale: number;
}

interface Star {
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
    return ((n % m) + m) % m
}

export class StarRenderer {
    options: StarRendererOptions = {
        // default params for testing.
        density: 3,

        starColors: [["#90d5ff",0.1],["#dab1da", 0.2], ["#666666", 1]],

        brightness: 0.8,
        birghtnessRange: 0.1,

        size: 2, //5px
        sizeRange: 1,

        period: 8000, // 2 seconds
        periodRange: 2000, // +/- half a second

        scrollScale: 0.55,
    };

    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    fullClearRequired = true;

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
    lerpFactor = 0.7;
    // last frame is used to calculate delta time.
    lastFrameTime = 0;

    canvasWidth: number = 0;
    canvasHeight: number = 0;
    rows = 0;
    cols = 0;

    renderHandle: number = 0;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d")!;
        this.setupEvents();
        this.startRender();
    }

    startRender() {
        // properly scale canvas before rendering
        this.updateWindowSize();

        this.renderHandle = requestAnimationFrame(this.render.bind(this));
    }

    render(currentTime: number) {
        const deltaTime = (currentTime - this.lastFrameTime) / 1000;
        this.smoothApproach(deltaTime);

        if (!this.fullClearRequired && deltaTime < 0.2) {
            // force ~30fps, or 60fps when screen is repainted.
            this.renderHandle = requestAnimationFrame(this.render.bind(this));
            return;
        }

        // number of 200x200 zones times density for each zone.
        const desiredStarCount = Math.floor(
            this.options.density * (this.canvasWidth / 200) * (this.canvasHeight / 200),
        );

        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        if (this.fullClearRequired) {
            this.fullClearRequired = false;
        }

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
            const y = mod((star.y - this.currentScrollY * this.options.scrollScale) , this.canvasHeight);

            // this.ctx.clearRect(star.x - star.radius, y - star.radius, star.radius * 2, star.radius * 2);
            // render single star
            this.ctx.fillStyle = star.color + star.currentBrightness;
            // this.ctx.fillRect(star.x, y, star.radius, star.radius);

            this.ctx.beginPath();
            this.ctx.ellipse(star.x, y, star.radius, star.radius, 0, 0, Math.PI * 2, false);
            this.ctx.fill();
        }

        // if current number of stars is less than desired amount, then lets generate some.
        while (this.stars.length < desiredStarCount) {
            this.stars.push(this.generateStar(currentTime));
        }

        // render finished, request next frame
        this.renderHandle = requestAnimationFrame(this.render.bind(this));

        // current frame is now last frame
        this.lastFrameTime = currentTime;
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

        this.fullClearRequired = true;
    }

    smoothApproach(dt: number) {
        this.currentCursorX = lerp(this.currentCursorX, this.targetCursorX, this.lerpFactor * dt);
        this.currentCursorY = lerp(this.currentCursorY, this.targetCursorY, this.lerpFactor * dt);
        const newScroll = lerp(this.currentScrollY, this.targetScrollY, this.lerpFactor * dt);

        if (Math.abs(newScroll - this.targetScrollY) > 1) {
            this.currentScrollY = newScroll;
            this.fullClearRequired = true;
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
            color: this.randomColor(),
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

    randomColor() {
        const rand = Math.random();
        for (const [color, chance] of this.options.starColors) {
            if (rand < chance) {
                return color;
            }
        }
        return this.options.starColors[this.options.starColors.length - 1][0];
    }

    cleanUp() {
        // FIXME add a proper clean up function
        console.log("cleaning up starbackgrond");

        cancelAnimationFrame(this.renderHandle);
    }
}
