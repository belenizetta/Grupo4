import { Router } from 'express';
import { registerUser, authUser, getUserProfile ,getUsers, getUserById, updateUserProfile } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddlewares.js';

const router = Router();

router.post('/', registerUser);
router.post('/login', authUser);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);
router.get('/',getUsers);
router.get('/:id', getUserById);

export default router;