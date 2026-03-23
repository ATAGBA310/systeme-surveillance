class ThermalSensorB {
  constructor(position) {
    this.position = position;
  }

  triggerHeatSignature(process) {
    const payload = {
      sensor: `ThermalSensorB-${this.position}`,
      detection: "thermal",
      date: new Date().toISOString()
    };

    process(payload);
  }
}

module.exports = ThermalSensorB;