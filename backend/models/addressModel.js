import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    postalCode: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true,
        default: "India"
    },
    isDefault: {
        type: Boolean,
        default: false
    },
    addressType: {
        type: String,
        enum: ['home', 'work', 'other'],
        default: 'home'
    }
}, {
    timestamps: true
});

// Ensure only one default address per user
addressSchema.pre('save', async function(next) {
    if (this.isDefault) {
        await this.constructor.updateMany(
            { user: this.user, _id: { $ne: this._id } },
            { isDefault: false }
        );
    }
    next();
});

const Address = mongoose.model("Address", addressSchema);

export default Address;