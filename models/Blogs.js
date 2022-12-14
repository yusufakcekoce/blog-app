import mongoose from "mongoose";
const { Schema } = mongoose;

const BlogSchema = new Schema({
    category: {
        type: String,
        required: true,
    },
    header: {
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
});

export default mongoose.model("Blog", BlogSchema);