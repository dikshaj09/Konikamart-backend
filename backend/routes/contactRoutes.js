import express from 'express';
import { createContact, createCallback } from '../controller/contactController.js';

const router = express.Router();

router.post('/', createContact);
router.post('/callback', createCallback);

export default router;