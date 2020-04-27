const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema ({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: Number,
    description: [String],
    img_link: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Menu', menuSchema);