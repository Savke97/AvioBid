const functions = require('firebase-functions');
const express = require('express');
const userRoutes = require('./routes/users');
const flightRoutes = require('./routes/flights');
const auctionRoutes = require('./routes/auctions');
const cors = require('cors');
const app = express();

app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/flights", flightRoutes);
app.use("/api/auctions", auctionRoutes);


exports.app = functions.https.onRequest(app);

