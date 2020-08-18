import * as express from 'express';
import * as AuctionController from '../controllers/auction.controller';
export const router = express.Router();

router.get("/:flightId", AuctionController.getRoomsByFlight);
router.post("/", AuctionController.setAuctionForFlight);
router.delete("/:auctionId", AuctionController.deleteAuctionById);


module.exports = router;