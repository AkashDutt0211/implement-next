import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const blog = new Schema({
  author: {
    type: String,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

mongoose.models = {};

const Blog = mongoose.model('Blog', blog);

export default Blog;