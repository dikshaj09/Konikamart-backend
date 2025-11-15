import mongoose from 'mongoose';

const callbackSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
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
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'cancelled'],
        default: 'pending'
    }
}, {
    timestamps: true
});

const Callback = mongoose.model('Callback', callbackSchema);
export default Callback;