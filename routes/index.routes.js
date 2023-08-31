const express = require("express");
const routes = express.Router();
const notificationController = require("../controllers/notification.controller");
routes.post("/send", notificationController.sendNotification);
module.exports = routes;