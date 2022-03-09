import Resize from "@/Events/resize";
// import Scroll from "@/Events/scroll";
import Update from "@/Events/update";

import Renderer from "@/THREE/renderer";

import Camera from "@/THREE/camera";

import { Scene } from "three";

//events
const resizer = new Resize();
const updater = new Update();
//gl
const renderer = new Renderer({
  canvas: document.querySelector("canvas"),
  alpha: true,
  antialias: true,
});
const camera = new Camera();
const scene = new Scene();

const init = () => {
  renderer.onResize(window.innerWidth, window.innerHeight);
  camera.onResize(window.innerWidth, window.innerHeight);
};

const events = () => {
  resizer.on(() => {
    renderer.onResize(window.innerWidth, window.innerHeight);
    camera.onResize(window.innerWidth, window.innerHeight);
  });

  updater.on(() => {
    renderer.render(scene, camera);
  });
};

init();
events();
