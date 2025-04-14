import express from 'express';
import isAuth from '../middleware/isAuth.js';
import { profile } from '../controllers/profile.js';

const router = express.Router();

router.get('/', isAuth, profile);

export default router;
