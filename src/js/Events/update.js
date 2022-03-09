import Stats from "stats.js";
export default class Update {
  constructor(isStats = true) {
    this.events = [];

    if (isStats) {
      this.stats = new Stats();
      this.stats.showPanel(0);
      document.body.appendChild(this.stats.dom);
    }
    this.isStop = false;
    this.update();
  }

  on(cb = (e) => {}) {
    this.events.push(cb);
  }

  update() {
    if (this.isStop) {
      window.requestAnimationFrame(this.update.bind(this));
      return;
    }
    this.stats.begin();
    for (let index = 0; index < this.events.length; index++) {
      this.events[index]();
    }
    this.stats.end();
    window.requestAnimationFrame(this.update.bind(this));
  }
}
