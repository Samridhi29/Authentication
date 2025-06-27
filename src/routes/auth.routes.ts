import express from 'express';
import { signup, login } from '../controllers/auth.controller';
import { verifyToken } from '../middlewares/auth.middleware';
import { getCurrentUser } from '../controllers/auth.controller';

const router = express.Router();
router.post('/signup', signup);
router.post('/login', login);
router.get('/me', verifyToken, getCurrentUser);

export default router;


