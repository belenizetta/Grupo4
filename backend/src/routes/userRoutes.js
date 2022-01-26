import { Router } from 'express';
import { registerUser, authUser, getUserProfile ,getUsers, getUserById, deleteUser } from '../controllers/userController.js';
import { admin,protect } from '../middlewares/authMiddlewares.js';

const router = Router();

router.post('/', registerUser);
router.post('/login', authUser);
router.get('/profile', protect, getUserProfile);
router.get('/',protect,getUsers);
router.get('/:id', protect, getUserById);
router.delete('/:id',protect,admin,deleteUser);

export default router;