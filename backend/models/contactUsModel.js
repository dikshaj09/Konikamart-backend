import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    orderId: {
        type: String,
    },
    message: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const Contact = mongoose.model('ContactUs', contactSchema, 'getintouch');
export default Contact;