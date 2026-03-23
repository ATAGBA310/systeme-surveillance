console.log("Projet système de surveillance");

const CameraA = require("./src/sensors/CameraA");
const TemperatureSensorA = require("./src/sensors/TemperatureSensorA");
const ThermalSensorBAdapter = require("./src/adapters/ThermalSensorBAdapter");

const EmailNotifier = require("./src/notifiers/EmailNotifier");
const LogNotifier = require("./src/notifiers/LogNotifier");
const DiscordNotifier = require("./src/notifiers/DiscordNotifier");

const Room = require("./src/core/Room");

// Création de la pièce
const livingRoom = new Room("Salon");

// Création des capteurs
const camera = new CameraA("Salon");
const tempSensor = new TemperatureSensorA("Salon", 30);
const thermalSensor = new ThermalSensorBAdapter("B-01");

// Ajout des capteurs à la pièce
livingRoom.addSensor(camera);
livingRoom.addSensor(tempSensor);
livingRoom.addSensor(thermalSensor);

// Création des notificateurs
const emailNotifier = new EmailNotifier("securite@batiment.com");
const logNotifier = new LogNotifier("alerts.log");
const discordNotifier = new DiscordNotifier("Serveur-Surveillance");

// Ajout des notificateurs à la pièce
livingRoom.addNotifier(emailNotifier);
livingRoom.addNotifier(logNotifier);
livingRoom.addNotifier(discordNotifier);

// Activation du système
livingRoom.armSensors();