const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const priceSchema = new Schema ({
    hot: Number,
    cold: Number,
    general: Number
}, {
    _id: false,
    versionKey: false
})

const menuSchema = new Schema ({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: [priceSchema],
    description: String,
    img_link: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Menu', menuSchema);