const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Post = new Schema({
    title: String,
    content: String,
    file: String,
    category: String,
    date: {
        type: Date,
        default: Date.now
    }
});

Post.statics.create = function(title, content, file, category) {
    const post = new this({
        title,
        content,
        file,
        category
    });

    return post.save();
}

Post.statics.findAllCategory = function(category) {
    return this.find({
        category
    }).exec();
}

Post.statics.findOneById = function(_id) {
    return this.findOne({
        _id
    }).exec();
}

module.exports = mongoose.model('Post', Post);