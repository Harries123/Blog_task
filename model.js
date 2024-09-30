const mongoose = require("mongoose");


const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    createdAt: { type: Number, required: true } 
  });

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;

