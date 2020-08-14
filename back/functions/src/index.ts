import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();
const db = admin.firestore();

export const helloWorld = functions.https.onRequest((request, response) =>{
    response.send("Hello from firebase");
})

export const getItem = functions.https.onRequest(async (request, Response) =>{
    console.log('Called [getItem]: ' + request.headers);

    try{
        const itemsRef = db.collection('items');
        const items: any = [];
        const snapshot = await itemsRef.get();
        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
            items.push(doc.data());
        });
        Response.send(items);
    } catch(error){
        console.error(error);
        Response.status(500).send(error);
    }
});
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
