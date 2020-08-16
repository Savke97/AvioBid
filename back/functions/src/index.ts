//import * as functions from 'firebase-functions';
//import * as admin from 'firebase-admin';

const functions = require('firebase-functions');
const express = require('express');
const userRoutes = require('./routes/users');
const app = express();

//admin.initializeApp();
//const db = admin.firestore();

app.use("/api/users", userRoutes);

exports.app = functions.https.onRequest(app);

/*

export const helloWorld = functions.https.onRequest((request, response) =>{
    response.send("Hello from firebase");
})

export const getAllFlights = functions.https.onRequest(async (request, response) => {
    try{
        const flightsRef = db.collection('flights');
        const flights: any = [];
        const snapshot = await flightsRef.get();
        snapshot.forEach(doc => {
            const flight = doc.data();
            flight.flight = doc.id;
            flights.push(flight);
        });
        response.send(flights);
    } catch(error){
        response.status(500).send(error);
    }
});

export const getRandomFlight = functions.https.onRequest(async (request, response) => {
    try{
        const flightsRef = db.collection('flights');
        const flights: any = [];
        const snapshot = await flightsRef.get();
        let count = 0;
        snapshot.forEach(doc => {
            const flight = doc.data();
            flight.flight = doc.id;
            flights.push(flight);
            count++;
        });
        const index = Math.floor(Math.random() * ((count-1) - 0 + 1) + 0);
        response.send(flights[index]);
    } catch(error){
        response.status(500).send(error);
    }
});
*/