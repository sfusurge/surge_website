export interface StarRendererOptions {
    density: number; // how many stars for every 100px of canvas

    starColors: [string, number][]; // list of hex color codes paired to their chance of appearing.
    //Note that the chances should between 0 - 1, and sum to 1.

    brightness: number; // base brightness of each star, will be implemented with alpha value
    birghtnessRange: number; // actual brightness will be chosen randomly from [brighness - range, brightness + range]

    size: number; // base size / radius of each star
    sizeRange: number; // actual size of star is from [size - range, size + range]

    period: number; // time in milliseconds that it takes for a star to created to be destroyed
    periodRange: number; // ...

    distributionCellSize: number; // when choosing star location randomly,
    // first randomly choose a cell of size of this variable, then truely randomly choose a spot within the cell
    // this is to avoid stars colliding with eachother, and make it feel more evenly distributed.
    // NOTE: during the cell selection, no more than 3 tries should be made. Collision is acceptable if cell size is large.
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

export class StarRenderer {
    options: StarRendererOptions = {
        // default params for testing.
        density: 10,

        starColors: [["#ffffff", 1]],

        brightness: 0.8,
        birghtnessRange: 0.1,

        size: 5, //5px
        sizeRange: 1,

        period: 2000, // 2 seconds
        periodRange: 500, // +/- half a second

        distributionCellSize: 15,
    };

    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    stars: Map<string, Star> = new Map();

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

        this.ctx.fillStyle = "red";
        this.ctx.fillRect(100, 0, 100, 100);
    }

    startRender() {
        // properly scale canvas before rendering
        this.updateWindowSize();

        this.renderHandle = requestAnimationFrame(this.render.bind(this));
    }

    render(currentTime: number) {
        const deltaTime = currentTime - this.lastFrameTime;

        this.smoothApproach(deltaTime);

        // new canvas each time
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        for(const key of this.stars.keys()){
            const star = this.stars.get(key)!;

            // updates star brightness
            this.updateStar(star, currentTime);

            // render single star
            
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

        this.rows = Math.ceil(this.canvasWidth / this.options.distributionCellSize);
        this.cols = Math.ceil(this.canvasHeight / this.options.distributionCellSize);
    }

    smoothApproach(dt:number){
        this.currentCursorX = lerp(this.currentCursorX, this.targetCursorX, this.lerpFactor * dt);
        this.currentCursorY = lerp(this.currentCursorY, this.targetCursorY, this.lerpFactor * dt);
        this.currentScrollY = lerp(this.currentScrollY, this.targetScrollY, this.lerpFactor * dt);
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
        let row = 0;
        let col = 0;
        let i = 0;
        for (; i < 3; i++) {
            row = Math.floor(this.rows * Math.random());
            col = Math.floor(this.cols * Math.random());

            if (!this.stars.has(`${row}|${col}`)) {
                break;
            }
        }

        const star: Star = {
            color: this.randomColor(),
            maxBrightness: randRange(this.options.brightness, this.options.birghtnessRange),
            currentBrightness: "00",
            radius: Math.ceil(randRange(this.options.size, this.options.sizeRange)),
            removeTime: Math.floor(currentTime + randRange(this.options.period, this.options.periodRange)),
            startTime: Math.floor(currentTime),

            // put the star in a grid, then random position within the grid cell
            x: Math.floor(row * this.options.distributionCellSize + this.options.distributionCellSize * Math.random()),
            // then offset by vertical scroll to fake a scroll effect
            y: Math.floor(
                col * this.options.distributionCellSize +
                    this.options.distributionCellSize * Math.random() +
                    (this.currentScrollY % this.canvasHeight),
            ),
        };

        if (i < 3) {
            this.stars.set(`${row}|${col}`, star);
        } else {
            // Tie breaker
            this.stars.set(`${row}|${col}${Math.floor(i * 100 * Math.random())}`, star);
        }
    }

    randomColor() {
        const rand = Math.random();
        for (const [color, chance] of this.options.starColors) {
            if (rand > chance) {
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
