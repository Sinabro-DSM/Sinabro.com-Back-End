const Post = require('../../models/post');

const writeOne = (req, res, next) => {
    const { title, content, category } = req.body;
    const img = 'uploads/' + req.file.filename;
    const respond = (post) => {
        console.log(post);
        res.status(200).json({
            message: "글 작성 성공",
            post
        });
    }

    const onError = (error) => {
        res.status(500).json({
            message: error.message,
        });
    }

    Post.create(title, content, img, category)
    .then(respond)
    .catch(onError)
}

const showPost = (req, res, next) => {
    const respond = (post) => {
        res.status(200).json({
            message: "success",
            post
        });
    }

    const onError = (error) => {
        res.status(500).json({
            message: error.message
        });
    }

    Post.findAllCategory(req.params.category)
    .then(respond)
    .catch(onError)
}

const showOne = (req, res, next) => {
    const respond = (post) => {
        res.status(200).json({
            message: "success",
            post: post
        });
    }

    const onError = (error) => {
        res.status(500).json({
            message: error.message
        });
    }

    Post.findOneById(req.params._id)
    .then(respond)
    .catch(onError)
}

module.exports = {
    writeOne,
    showPost,
    showOne
}