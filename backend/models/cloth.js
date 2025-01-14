const mongoose = require("mongoose");

const clothSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // "Men", "Women", "Kids"
    category: {
        type: String,
        required: true
    },
    // "S, M, L, XL"
    size: {
        type: Array,
        required: true,  // Ensure this is required
    },
    coverImage: {
        type: String,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

module.exports = mongoose.model("Cloth", clothSchema);
