const functions = require('firebase-functions');
const express = require('express');
const userRoutes = require('./routes/users');
const flightRoutes = require('./routes/flights');
const app = express();


app.use("/api/users", userRoutes);
app.use("/api/flights", flightRoutes);


exports.app = functions.https.onRequest(app);

