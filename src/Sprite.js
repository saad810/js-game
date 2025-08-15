import { Vector2 } from "./Vector2";

export class Sprite {
    constructor({
        resource, //the image path or url
        frameSize, //
        hFrame,
        vFrame,
        frame,
        scale,
        position,

    }) {
        
        this.resource = resource; //the image path or url
        this.frameSize = frameSize ?? new Vector2(16, 16);
        this.hFrame = hFrame ?? 1;
        this.vFrame = vFrame ?? 1;
        this.frame = frame ?? 0;
        this.scale = scale ?? 1;
        this.position = position ?? new Vector2(0, 0);
        this.frameMap = new Map();
        this.buildFrameMap();
    }

    buildFrameMap() {
        let frameCount = 0;
        // iterate through vertical and horizontally on sprite sheet
        for (let vertical = 0; vertical < this.vFrame; vertical++) {
            for (let horizontal = 0; horizontal < this.hFrame; horizontal++) {
                // console.log(`Adding frame ${frameCount} at position (${horizontal}, ${vertical})`);
                this.frameMap.set(
                    frameCount,
                    new Vector2(
                        this.frameSize.x * horizontal,
                        this.frameSize.y * vertical
                    )
                )
                frameCount++;
            }
        }
    }
    drawImage(ctx, x, y) {
        if (!this.resource.isLoaded) {
            return;
        }

        // find correct sprite sheet frame
        let frameCoordX = 0;
        let frameCoordY = 0;
        const frameVector = this.frameMap.get(this.frame);
        if (frameVector) {
            frameCoordX = frameVector.x;
            frameCoordY = frameVector.y;
        }
        const frameSizeX = this.frameSize.x;
        const frameSizeY = this.frameSize.y;

        ctx.drawImage(
            this.resource.image,
            frameCoordX, // source x
            frameCoordY, // source y
            frameSizeX, // source width
            frameSizeY, // source height
            x, // destination/where to place on canvas x
            y, // destination/where to place on canvas y
            frameSizeX * this.scale, // destination width
            frameSizeY * this.scale // destination height
        );
    }
}