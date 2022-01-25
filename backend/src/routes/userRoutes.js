import { Router } from 'express';
import { registerUser, authUser, getUserProfile } from '../controllers/userController.js';

const router = Router();

router.post('/', registerUser);
router.post('/login', authUser);
router.get('/profile',getUserProfile);

export default router;