import * as express from 'express';
import * as UserController from '../controllers/user.controller';
export const router = express.Router();

router.get("/", UserController.getAllUsers);

module.exports = router;


