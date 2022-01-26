import { Router } from 'express';
import { registerUser, authUser, getUserProfile ,getUsers, getUserById } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddlewares.js';

const router = Router();

router.post('/', registerUser);
router.post('/login', authUser);
router.get('/profile', protect, getUserProfile);
router.get('/',protect,getUsers);
router.get('/:id', protect, getUserById);

export default router;