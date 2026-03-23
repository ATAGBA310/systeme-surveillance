class EmailNotifier {
  constructor(email) {
    this.email = email;
  }

  update(message) {
    console.log(`[EMAIL vers ${this.email}] ${message}`);
  }
}

module.exports = EmailNotifier;