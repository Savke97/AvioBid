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


async function sendMail (dest:any) {

    try {
        cors(request, response, () => {
      
            // getting dest email by query string   ?????????
            //const dest = request.query.dest;
    
            const mailOptions = {
                from: 'Aca Perin <acaperin356@gmail.com>', 
                to: dest,                                   //??????????????????
                subject: 'Available auctions for a business class ticket',
                html: `<body>
                        <h1 style="font-family:'verdana'">Business class tickets on sale!</h1>
                        <hr>
                        <p style="font-family:'verdana'">A unique opportunity to upgrade your economic class ticket to a business class ticket. Take part in an auction and get a chance to win a business class ticket for 50% off or more. As long as you wait, there is a bigger chance for someone else to grab that ticket. Due to that, hurry up and good luck!</p>
                        <br>
                        <a href="https://www.youtube.com/"><p style="color:DodgerBlue;"><font size = "4">Just click on this link :)</font></p></a>
                        <br><br><br>
                        <center><img src="https://www.logo-designer.co/wp-content/uploads/2019/01/2019-aer-lingus-new-logo-design-aircraft-livery-brand-refresh.png" alt="Aer Lingus" width="320" height="321"></center>
                        </body>`
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





