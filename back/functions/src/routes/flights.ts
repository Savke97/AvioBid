import * as express from 'express';
import * as FlightController from '../controllers/flight.controller';
export const router = express.Router();

router.get("/", FlightController.getAllFlights);

module.exports = router;