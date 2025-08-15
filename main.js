import { GameLoop } from './src/GameLoop';
import { resource } from './src/Resource';
import { Sprite } from './src/Sprite';
import { Vector2 } from './src/Vector2';
import './style.css'
const canvas = document.querySelector('#game-canvas');
const ctx = canvas.getContext('2d');
const sky = new Sprite({
    resource: resource.images.sky,
    frameSize: new Vector2(320, 180),
})
const ground = new Sprite({
    resource: resource.images.ground,
    frameSize: new Vector2(320, 180),
})
const shadow = new Sprite({
    resource: resource.images.shadow,
    frameSize: new Vector2(32, 32),
})
const hero = new Sprite({
    resource: resource.images.hero,
    frameSize: new Vector2(32, 32),
    hFrame: 3,
    vFrame: 8,
    frame: 1,
})
const heroPos = new Vector2(16 * 6, 16 * 5);
const heroOffset = new Vector2(-8, -22);
const heroPosOffsetX = heroPos.x + heroOffset.x;
const heroPosOffsetY = heroPos.y + heroOffset.y;

const draw = () => {
    sky.drawImage(ctx, 0, 0);
    ground.drawImage(ctx, 0, 0);
    shadow.drawImage(ctx, heroPosOffsetX, heroPosOffsetY);
    hero.drawImage(ctx, heroPosOffsetX, heroPosOffsetY);

}
const update = ()=>{
    hero.frame++;
}

const gameLoop = new GameLoop(update, draw);
gameLoop.start();