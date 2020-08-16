import * as functions from 'firebase-functions';
import { db } from '../firebase';

export const getAllFlights = functions.https.onRequest(async (request, response) => {
    try{
        const flightsRef = db.collection('flights');
        const flights: any = [];
        const snapshot = await flightsRef.get();
        snapshot.forEach(doc => {
            flights.push(doc.data());
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