let serviceAccount = require("./config.json");
var admin = require("firebase-admin");

let cert = admin.credential.cert(serviceAccount);
const fcm = require('fcm-notification');
const FCM = new fcm(cert)

exports.sendNotification = (req, res, next) => {
    let msg = {
        notification: {
            title: "Sample Notification",
            "body": "This is a sample notification"
        },
        data: {
            title: "Mukwano Toffa",
            body: "Just go get your kid before time is up"
        },
        token: req.body.token
    };

    FCM.send(msg, (err, response) => {
        if (err) {
            res.status(500).send({ "message": err });
        } else {
            res.status(200).send({ message: "Notification sent successfully" });
        }
    });
}