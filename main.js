import { Keys } from './constants';
import { GameLoop } from './src/GameLoop';
import { gridCells } from './src/helpers/grid';
import { Input } from './src/Input';
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
    position: new Vector2(gridCells(6), gridCells(5))
})
// const heroPos = new Vector2(16 * 6, 16 * 5);

const draw = () => {
    const heroOffset = new Vector2(-8, -22);
    const heroPosOffsetX = hero.position.x + heroOffset.x;
    const heroPosOffsetY = hero.position.y + heroOffset.y;

    sky.drawImage(ctx, 0, 0);
    ground.drawImage(ctx, 0, 0);
    shadow.drawImage(ctx, heroPosOffsetX, heroPosOffsetY);
    hero.drawImage(ctx, heroPosOffsetX, heroPosOffsetY);
}
const input = new Input();

const update = () => {
    // console.log(hero.position)
    if (input.direction === Keys.UP) {
        hero.position.y -= 1;
        hero.frame = 6
    } else if (input.direction === Keys.DOWN) {
        hero.position.y += 1;
        hero.frame = 0

    } else if (input.direction === Keys.LEFT) {
        hero.position.x -= 1;
        hero.frame = 9
    } else if (input.direction === Keys.RIGHT) {
        hero.position.x += 1;
        hero.frame = 3
    }
}

const gameLoop = new GameLoop(update, draw);
gameLoop.start();

