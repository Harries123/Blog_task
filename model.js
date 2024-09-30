const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Blog schema
const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Blog model
const Blog = mongoose.model("Blog", blogSchema);

// Export the Blog model
module.exports = Blog;
