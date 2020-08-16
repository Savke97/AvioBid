import User from '../models/user.interface';
import * as functions from 'firebase-functions';
import { db } from '../firebase';



export const getAllUsers = functions.https.onRequest(async (request, response) => {
    try {
        const usersRef = db.collection('users');
        const users: any = [];
        const snapshot = await usersRef.get();
        snapshot.forEach(doc => {
            users.push(doc.data());
        });
        response.send(users);
    } catch (error) {
        response.status(500).send(error);
    }
});

export const getUserById = functions.https.onRequest(async (request, response) => {
    try {
        const userRef = db.collection('users').doc(request.params.userId);
        const snapshot = await userRef.get();
        response.send(snapshot.data());
    } catch (error) {
        response.status(500).send(error);
    }
});

export const setUser = functions.https.onRequest(async (request, response) => {
    try {
        const user: User = request.body;
        const result = await db.collection('users').add(user);
        (result) ? response.send(user) : response.send(undefined);
    } catch (error) {
        response.status(500).send(error);
    }
});

export const deleteUserById = functions.https.onRequest(async (request, response) => {
    try {
        const userRef = db.collection('users').doc(request.params.userId);
        const result = await userRef.delete();
        (result) ? response.status(200).send("The user has been successfully deleted.") : response.status(400).send("BAD REQUEST");
    } catch (error) {
        response.status(500).send(error);
    }
});



