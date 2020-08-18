const functions = require('firebase-functions');
const express = require('express');
const userRoutes = require('./routes/users');
const flightRoutes = require('./routes/flights');
const auctionRoutes = require('./routes/auctions');
const cors = require('cors');
const app = express();

const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'acaperin356@gmail.com',
        pass: 'milance356'
    }
});

app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/flights", flightRoutes);
app.use("/api/auctions", auctionRoutes);        



exports.app = functions.https.onRequest(app);

