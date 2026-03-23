class DiscordNotifier {
  constructor(serverName) {
    this.serverName = serverName;
  }

  update(message) {
    console.log(`[DISCORD sur ${this.serverName}] ${message}`);
  }
}

module.exports = DiscordNotifier;