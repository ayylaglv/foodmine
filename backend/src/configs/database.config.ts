import { connect } from "mongoose";

export const dbConnect = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error("MONGO_URI is not defined in environment variables.");
    }

    await connect(uri);
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};
