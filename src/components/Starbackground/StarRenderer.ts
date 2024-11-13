export interface StarRendererOptions {
    density: number; // how many stars for every 100px of canvas

    starColors: { [color: string]: number }; // dictionary of hex color codes mapped to their chance of appearing.
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

    period: number; // total time in ms this star will be alive for
    currentTime: number; // life time of this star so far.

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

export class StarRenderer {
    options: StarRendererOptions = {
        // default params for testing.
        density: 10,

        starColors: { "#ffffff": 1 },

        brightness: 0.8,
        birghtnessRange: 0.1,

        size: 5, //5px
        sizeRange: 1,

        period: 2000, // 2 seconds
        periodRange: 500, // +/- half a second

        distributionCellSize: 15,
    };

    ctx: CanvasRenderingContext2D;

    // track browser state for interactivity
    targetCursorX: number = 0;
    targetCursorY: number = 0;
    targetScrollY: number = 0; // dont track scrollX, assume the page never horizontally scroll.

    // lerp current value to target value each from to feel *smooth*
    // note to self to always round to int before rendering.
    currentCursorX: number = 0;
    currentCursorY: number = 0;
    currentScrollY: number = 0;

    canvasWidth: number = 0;
    canvasHeight: number = 0;

    renderHandle: number = 0;

    constructor(canvas: HTMLCanvasElement) {
        this.ctx = canvas.getContext("2d")!;
        this.setupEvents();
        this.startRender();
    }

    startRender() {
        this.renderHandle = requestAnimationFrame(this.render);
    }

    render(dt: number) {
        console.log(dt, this.canvasHeight, this.canvasWidth);

        this.renderHandle = requestAnimationFrame(this.render);
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
            this.canvasWidth = window.innerWidth;
            this.canvasHeight = window.innerHeight;
        });
    }

    cleanUp() {
        // FIXME add a proper clean up function
        cancelAnimationFrame(this.renderHandle);
    }
}
