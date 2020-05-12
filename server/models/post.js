const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: String,
    img_link: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Post', postSchema);