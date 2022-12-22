import mongoose from "mongoose";
const { Schema } = mongoose;

const BlogSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    photo: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Blog", BlogSchema);
