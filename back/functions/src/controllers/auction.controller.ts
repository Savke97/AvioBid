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

// [HttpPost]
export const setAuctionForFlight = functions.https.onRequest(async (request, response) => {
    try {
        const auctionsRef = await db.collection('auctions').doc(request.body.flightID).collection('rooms');
        const number = request.body.number;
        for (let i = 0; i < number; i++) {
            const result = await auctionsRef.add({ maxBid: request.body.minCost });
            if (!result) response.status(500).send("Error");
        }
        response.send("Auction has been sucessfully added.");
    } catch (error) {
        response.status(500).send(error);
    }
});

// [HttpDelete("auctionID")]
export const deleteAuctionById = functions.https.onRequest(async (request, response) => {
    /*try {
        const auctionRef = db.collection('auctions').doc(request.params.auctionId);
        const result = await auctionRef.delete();
        (result) ? response.status(200).send("Auction has been successfully deleted.") : response.status(400).send("BAD REQUEST");
    } catch (error) {
        response.status(500).send(error);
    }*/
      /*
    try {
        const resp = await deleteCollection(db, 'auctions', 50);
        if (resp)
            response.status(200).send("Auction has been successfully deleted.");
        else
            response.status(400);
    } catch (error) {
        response.status(500).send(error);
    }*/
});

async function deleteCollection(dbs: any, collectionPath: any, batchSize: any) {
    const collectionRef = dbs.collection(collectionPath);
    // const query = collectionRef.orderBy('__name__').limit(batchSize);

    return new Promise((resolve, reject) => {
        deleteQueryBatch(dbs, collectionRef, resolve).catch(reject);
    });
}

async function deleteQueryBatch(dbs: any, query: any, resolve: any) {
    const snapshot = await query.get();

    const batchSize = snapshot.size;
    if (batchSize === 0) {
        // When there are no documents left, we are done
        resolve();
        return;
    }

    // Delete documents in a batch
    const batch = dbs.batch();
    snapshot.docs.forEach((doc: any) => {
        batch.delete(doc.ref);
    });
    await batch.commit();

    // Recurse on the next process tick, to avoid
    // exploding the stack.
    process.nextTick(() => {
        deleteQueryBatch(dbs, query, resolve);
    });
}



