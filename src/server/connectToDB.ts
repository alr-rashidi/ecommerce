import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Connected to MongoDB");
  } catch (err) {
    if (err instanceof Error)
      console.error("Error connecting to MongoDB:", err.message || "unknown");
  }
};
