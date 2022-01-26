import { Router } from 'express';
import { registerUser, authUser, getUserProfile ,getUsers, getUserById } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddlewares.js';

const router = Router();

router.post('/', registerUser);
router.post('/login', authUser);
router.get('/profile', protect, getUserProfile);
router.get('/',getUsers);
router.get('/:id', getUserById);

export default router;