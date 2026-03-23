class Room {
  constructor(name) {
    this.name = name;
    this.sensors = [];
    this.notifiers = [];
  }

  addSensor(sensor) {
    this.sensors.push(sensor);
  }

  addNotifier(notifier) {
    this.notifiers.push(notifier);
  }

  notifyAll(message) {
    this.notifiers.forEach((notifier) => {
      notifier.update(message);
    });
  }

  armSensors() {
    this.sensors.forEach((sensor) => {
      sensor.onDetect((message) => {
        const fullMessage = `[Pièce ${this.name}] ${message}`;
        this.notifyAll(fullMessage);
      });
    });
  }
}

module.exports = Room;