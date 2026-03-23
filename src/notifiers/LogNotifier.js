class LogNotifier {
  constructor(fileName) {
    this.fileName = fileName;
  }

  update(message) {
    console.log(`[LOG dans ${this.fileName}] ${message}`);
  }
}

module.exports = LogNotifier;