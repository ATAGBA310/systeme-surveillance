const ThermalSensorB = require("../sensors/ThermalSensorB");

class ThermalSensorBAdapter {
  constructor(position) {
    this.sensorB = new ThermalSensorB(position);
  }

  onDetect(callback) {
    this.sensorB.triggerHeatSignature((data) => {
      const message = `Alerte thermique détectée par ${data.sensor} le ${data.date}`;
      callback(message);
    });
  }
}

module.exports = ThermalSensorBAdapter;