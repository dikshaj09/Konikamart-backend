import asyncHandler from '../middleware/asyncHandler.js';
import Contact from '../models/contactUsModel.js';
import Callback from '../models/callbackModel.js';

// @desc    Create new contact message
// @route   POST /api/contact
// @access  Public
const createContact = asyncHandler(async (req, res) => {
    const { userId, name, email, orderId, message } = req.body;

    const contact = await Contact.create({
        userId,
        name,
        email,
        orderId,
        message
    });

    if (contact) {
        res.status(201).json({ message: 'Message sent successfully' });
    } else {
        res.status(400);
        throw new Error('Invalid contact data');
    }
});

// @desc    Create callback request
// @route   POST /api/contact/callback
// @access  Public
const createCallback = asyncHandler(async (req, res) => {
    const { userId, name, phone, email, orderId, message } = req.body;

    const callback = await Callback.create({
        userId,
        name,
        phone,
        email,
        orderId,
        message
    });

    if (callback) {
        res.status(201).json({ message: 'Callback request received successfully' });
    } else {
        res.status(400);
        throw new Error('Invalid callback data');
    }
});

export { createContact, createCallback };