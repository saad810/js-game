import { Keys, ArrowEvents, KeyEvents } from "../constants"
export class Input {
    constructor() { 
        this.heldDirection = []
        document.addEventListener("keydown", (e => {
            console.log(e.key, e.code);
            switch (e.code) {
                case ArrowEvents.UP:
                case KeyEvents.KEY_UP:
                    console.log(Keys.UP);
                    this.onArrowPressed(Keys.UP);
                    break;
                case ArrowEvents.DOWN:
                case KeyEvents.KEY_DOWN:
                    console.log(Keys.DOWN);
                    this.onArrowPressed(Keys.DOWN);
                    break;
                case ArrowEvents.LEFT:
                case KeyEvents.KEY_LEFT:
                    console.log(Keys.LEFT);
                    this.onArrowPressed(Keys.LEFT);
                    break;
                case ArrowEvents.RIGHT:
                case KeyEvents.KEY_RIGHT:
                    console.log(Keys.RIGHT);
                    this.onArrowPressed(Keys.RIGHT);
                    break;
            }
        }))


        document.addEventListener("keyup", (e => {
            console.log(e.key, e.code);
            switch (e.code) {
                case ArrowEvents.UP:
                case KeyEvents.KEY_UP:
                    console.log(Keys.UP);
                    this.onArrowReleased(Keys.UP);
                    break;
                case ArrowEvents.DOWN:
                case KeyEvents.KEY_DOWN:
                    console.log(Keys.DOWN);
                    this.onArrowReleased(Keys.DOWN);
                    break;
                case ArrowEvents.LEFT:
                case KeyEvents.KEY_LEFT:
                    console.log(Keys.LEFT);
                    this.onArrowReleased(Keys.LEFT);
                    break;
                case ArrowEvents.RIGHT:
                case KeyEvents.KEY_RIGHT:
                    console.log(Keys.RIGHT);
                    this.onArrowReleased(Keys.RIGHT);
                    break;
            }
        }))
    }
    
    get direction() {
        return this.heldDirection[0];
    }

    onArrowPressed(direction) {
        console.log("Arrow pressed:", direction);
        if (this.heldDirection.indexOf(direction) === -1) {
            this.heldDirection.unshift(direction);
        }
    }

    onArrowReleased(direction) {
        console.log("Arrow released:", direction);
        const index = this.heldDirection.indexOf(direction);
        if (index !== -1) {
            this.heldDirection.splice(index, 1);
        }
        // this.heldDirection.splice(index, 1);
    }
}