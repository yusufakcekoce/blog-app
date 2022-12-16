import Blogs from "../models/Blogs.js";

export const createBlog = async (req, res, next) => {
  const newBlog = new Blogs(req.body);

  try {
    const savedBlog = await newBlog.save();
    res.status(200).json(savedBlog);
  } catch (err) {
    next(err);
  }
};

export const updateBlog = async (req, res, next) => {
  try {
    const updatedBlog = await Blogs.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedBlog);
  } catch (err) {
    next(err);
  }
};

export const deleteBlog = async (req, res, next) => {
  try {
    await Blogs.findByIdAndDelete(req.params.id);
    res.status(200).json("Blog has been deleted...");
  } catch (err) {
    next(err);
  }
};

export const getBlog = async (req, res, next) => {
  try {
    const blog = await Blogs.findById(req.params.id);
    res.status(200).json(blog);
  } catch (err) {
    next(err);
  }
};
export const getBlogs = async (req, res, next) => {
  try {
    const blogs = await Blogs.find();
    res.status(200).json(blogs);
  } catch (err) {
    next(err);
  }
};
