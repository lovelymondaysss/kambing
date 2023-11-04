import Phaser from "phaser";
export default class BunnyJumpScene extends Phaser.Scene {
  constructor() {
    super("bunny-jump-scene");
  }
  preload() {
    this.load.image("background", "images/carrot.png");
  }
  create() {
    this.add.image(240, 320, "background");
    // this.add.image(240, 320, "platform");
  }

  update() {}
}
