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
