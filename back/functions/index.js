const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: true }));

//Connection to Firebase DB
var serviceAccount = require("./permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://aukcija-edit-2020.firebaseio.com"
});

const db = admin.firestore();


//JUST FOR TESTING FIRST BACK CALL
app.get('/hello-world', (req, res) => {
  return res.status(200).send('Hello World!');
});

app.post('/api/create',(req,res) => {
    (async () => {
        try{
            await db.collection('items').doc('/', req.body.id + '/')
                .create({item: req.body.item});
            return res.status(200).send("Uspesno kreiran item");
        } catch(error){
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

//GET ALL AUCTIONS
/*
    GET:
    http://localhost:5001/aukcija-edit-2020/us-central1/app/api/auctions/
    https://us-central1-aukcija-edit-2020.cloudfunctions.net/app/api/auctions/

*/
app.get('/api/auctions',(req,res) =>{
    return res.status(200).send('Radi GET Auctions');
});

//CREATE AUCTIONS
/*
    POST:
    http://localhost:5001/aukcija-edit-2020/us-central1/app/api/auctions/
    https://us-central1-aukcija-edit-2020.cloudfunctions.net/app/api/auctions/

*/
app.post('/api/auctions',(req,res) => {
    return res.status(200).send('Radi POST Auctions');
});

//UPDATE AUCTIONS
/*
    PATCH:
    http://localhost:5001/aukcija-edit-2020/us-central1/app/api/auctions/:id
    https://us-central1-aukcija-edit-2020.cloudfunctions.net/app/api/auctions/:id

*/
app.patch('/api/auctions/:id',(req,res) => {
    return res.status(200).send('Radi PATCH Auctions za ' + req.params.id);
});
//DELETE AUCTIONS
/*
    DELETE:
    http://localhost:5001/aukcija-edit-2020/us-central1/app/api/auctions/:id
    https://us-central1-aukcija-edit-2020.cloudfunctions.net/app/api/auctions/:id

*/
app.delete('/api/auctions/:id',(req,res) => {
    return res.status(200).send('Radi DELETE Auctions za ' + req.params.id);
});

exports.app = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
