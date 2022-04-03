const { Schema, model } = require('mongoose');

const ImagesSchema = new Schema({
    label: {
        type: String,
        required: true
    },
    img: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = model('Images', ImagesSchema);