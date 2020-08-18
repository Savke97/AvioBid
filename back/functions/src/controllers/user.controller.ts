import * as functions from 'firebase-functions';
import { db } from '../firebase';

// [Route("api/users")]

// [HttpGet]
export const getAllUsers = functions.https.onRequest(async (request, response) => {
    try {
        const usersRef = db.collection('users');
        const users: any = [];
        const snapshot = await usersRef.get();
        snapshot.forEach(doc => {
            const user = doc.data();
            user.email = doc.id;  // userID
            users.push(user);
        });
        response.send(users);
    } catch (error) {
        response.status(500).send(error);
    }
});

// [HttpGet("{userId}")]
export const getUserById = functions.https.onRequest(async (request, response) => {
    try {
        const userRef = db.collection('users').doc(request.params.userId);
        const snapshot = await userRef.get();
        response.send(snapshot.data());
    } catch (error) {
        response.status(500).send(error);
    }
});

// [HttpPost]
export const setUser = functions.https.onRequest(async (request, response) => {
    try {
        const result = await db.collection('users').doc(request.body.email).set({name: request.body.name});
        (result) ? response.send("The user has been sucessfully added.") : response.send(undefined);
    } catch (error) {
        response.status(500).send(error);
    }
});

// [HttpDelete("{userId}")]
export const deleteUserById = functions.https.onRequest(async (request, response) => {
    try {
        const userRef = db.collection('users').doc(request.params.userId);
        const result = await userRef.delete();
        (result) ? response.status(200).send("The user has been successfully deleted.") : response.status(400).send("BAD REQUEST");
    } catch (error) {
        response.status(500).send(error);
    }
});



