import connectMongoDB from "../../middleware/mongoDb";
import Blog from "../../models/blogs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { author, title, content } = await req.body;
    await connectMongoDB();
    await Blog.create({ author, title, content });
    return res.status(201).json({ message: "Topic Created" }, { status: 201 });
  }
  if(req.method === "GET") {
    await connectMongoDB();
    const blogs = await Blog.find();
    return res.status(200).json({ blogs });
  }
  if(req.method === "DELETE") {
    const id = req.query?.id;
    await connectMongoDB();
    const blogs = await Blog.findByIdAndDelete(id);
    return res.status(200).json({ blogs });
  }
}
