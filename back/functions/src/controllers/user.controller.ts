import User from '../models/user.interface';
import * as functions from 'firebase-functions';
import { db } from '../firebase';
import { response, request } from 'express';

// [Route("api/users")]

// [HttpGet]
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
        const user: User = request.body;
        const result = await db.collection('users').add(user);
        (result) ? response.send(user) : response.send(undefined);
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


function sendMail () {

    try {
        cors(request, response, () => {
      
            // getting dest email by query string
            const dest = request.query.dest;
    
            const mailOptions = {
                from: 'Aca Perin <acaperin356@gmail.com>', 
                to: dest,                                   //??????????????????
                subject: 'Subject: Bla Bla', 
                html: `<p>This is a paragraph.</p>`
            };
      
            
            return transporter.sendMail(mailOptions, (erro:any, info:any) => {
                if(erro){
                    return response.send(erro.toString());
                }
                return response.send('Sended');
            });
        });  
    } catch (error) {
        response.status(500).send(error);
    }

};





