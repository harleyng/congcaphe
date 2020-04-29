const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const grocerySchema = new Schema ({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: String,
    description: String,
    img_link: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Grocery', grocerySchema);