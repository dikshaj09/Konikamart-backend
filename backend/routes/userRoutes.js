import express from 'express';
const router = express.Router();
import {    
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserById,
    deleteUser,
    updateUser,
    authSeller,
    registerSeller
} from '../controller/userController.js';
import { protect, admin, seller } from '../middleware/authMiddleware.js';   

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/login', authUser);
router.post('/logout', logoutUser);
router.post('/seller/login', authSeller);
router.post('/seller/register', registerSeller);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route('/:id')
  .get(protect, admin, getUserById)
  .delete(protect, admin, deleteUser)
  .put(protect, admin, updateUser);

export default router;
 