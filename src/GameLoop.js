export class GameLoop {
    constructor(update, render) {
        this.lastFrameTime = 0;
        this.accumulatedTime = 0;
        this.timeStamp = 1000 / 60;

        this.update = update;
        this.render = render;

        this.reqAnimationFrameID = null;
        this.isRunning = false;
    }

    mainLoop = (timeStamp) => {
        if (!this.isRunning) {
            return;
        }
        let deltaTime = timeStamp - this.lastFrameTime;
        this.lastFrameTime = timeStamp

        this.accumulatedTime += deltaTime;

        while (this.accumulatedTime >= this.timeStamp) {
            this.update(this.timeStamp); //fixed timestep
            this.accumulatedTime -= this.timeStamp;
        }

        this.render();

        this.reqAnimationFrameID = requestAnimationFrame(this.mainLoop);
    }

    start(){
        if(!this.isRunning){
            this.isRunning = true;
            this.reqAnimationFrameID = requestAnimationFrame(this.mainLoop)
        }
    }
    stop(){
        if(this.reqAnimationFrameID){
            cancelAnimationFrame(this.reqAnimationFrameID);
        }
        this.isRunning = false;
    }

}