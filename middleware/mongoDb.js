import mongoose from "mongoose";

const connectDB = async () => {
  // Use new db connection
  await mongoose.connect(process.env.mongodburl);
};

export default connectDB;
