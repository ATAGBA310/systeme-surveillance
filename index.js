console.log("Projet système de surveillance");

const CameraA = require("./src/sensors/CameraA");

const cam = new CameraA("Salon");

cam.onDetect((msg) => {
  console.log(msg);
});