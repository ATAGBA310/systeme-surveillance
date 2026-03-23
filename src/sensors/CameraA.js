class CameraA {
  constructor(location) {
    this.location = location;
  }

  onDetect(callback) {
    const message = `Alerte caméra dans la pièce ${this.location}`;
    callback(message);
  }
}

module.exports = CameraA;