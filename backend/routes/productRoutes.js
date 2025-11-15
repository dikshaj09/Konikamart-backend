import express from 'express';
const router = express.Router();
import { 
    getProducts, 
    getProductById,
    createProduct, 
    updateProduct, 
    deleteProduct
} from '../controller/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

// Move the more specific routes above the dynamic routes
router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id').get(getProductById).put(protect, admin, updateProduct).delete(protect, admin, deleteProduct);

export default router;
