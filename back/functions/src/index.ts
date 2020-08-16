import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();
const db = admin.firestore();

export const helloWorld = functions.https.onRequest((request, response) =>{
    response.send("Hello from firebase");
})

export const getUsers = functions.https.onRequest(async (request, response) =>{
    try{
        const usersRef = db.collection('users');
        const users: any = [];
        const snapshot = await usersRef.get();
        snapshot.forEach(doc => {
            users.push(doc.data());
        });
        response.send(users);
    } catch(error){
        response.status(500).send(error);
    }
});


export const setUsers = functions.https.onRequest(async (request, response)=>{
    try{
        const result = await db.collection('users').doc('proba').set({ email: request.body.email, name: request.body.name});
        const newUser = await db.collection('users').doc('proba').get();

        let res;
        if(result){
            res = newUser.data();
        } else{
            res = undefined;
        }
        response.send(res);
    } catch(error){
        response.status(500).send(error);
    }
});

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
