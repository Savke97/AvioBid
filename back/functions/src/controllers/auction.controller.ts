import * as functions from 'firebase-functions';
import { db } from '../firebase';

// [Route("api/auctions")]

// [HttpGet("{flightId}")]
export const getRoomsByFlight = functions.https.onRequest(async (request, response) => {
    try {
        const auctionsRef = db.collection('auctions').doc(request.params.flightId);       // auctionID = flightID
        const roomsRef = auctionsRef.collection('rooms');
        const rooms: any = [];
        const snapshot = await roomsRef.get();
        snapshot.forEach(doc => {
            rooms.push(doc.data());
        });
        response.send(rooms);
    } catch (error) {
        response.status(500).send(error);
    }
});