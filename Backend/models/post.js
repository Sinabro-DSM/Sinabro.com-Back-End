const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Post = new Schema({
    title: String,
    content: String,
    post: String,
    category: String,
    date: {
        type: Date,
        default: Date.now
    }
});