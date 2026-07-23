import Phaser from "phaser";

export class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    preload() {
        this.load.image("red_tile", "assets/tilesets/red_tile.png");
        this.load.image("background", "assets/images/village_background.png");
        this.load.tilemapTiledJSON("village_map", "assets/maps/village_map.json");
    }

    create() {
        this.add.image(0, 0, "background").setOrigin(0, 0);

        const map = this.make.tilemap({key: "village_map"});
        const tileset = map.addTilesetImage("Collisions", "red_tile");

        if (tileset) {
            map.createLayer("Collisions", tileset, 0, 0);
        }
    }
}