const mongoose = require('mongoose');

// title, description, auther, timestamp
const postSchema = new mongoose.Schema({
    title: String,
    description: { type: String, default: "" },
    auther: { type: String, default: "" },
    timestamp: { type: Date },
});

const PostModel = mongoose.model("MyPosts", postSchema);
module.exports = PostModel;
