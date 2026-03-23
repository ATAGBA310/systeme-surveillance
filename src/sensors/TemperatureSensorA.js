class TemperatureSensorA {
  constructor(location, threshold) {
    this.location = location;
    this.threshold = threshold;
  }

  onDetect(callback) {
    const message = `Alerte température dans la pièce ${this.location} : seuil ${this.threshold}°C dépassé`;
    callback(message);
  }
}

module.exports = TemperatureSensorA;