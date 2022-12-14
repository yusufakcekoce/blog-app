import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoute from "./routes/auth.js";
import blogsRoute from "./routes/blogs.js";
import usersRoute from "./routes/users.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnect");
});

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/blogs", blogsRoute);
app.use("/api/usersRoute", usersRoute);

app.listen(8800, () => {
  connect();
  console.log("Connected to backend!");
});
