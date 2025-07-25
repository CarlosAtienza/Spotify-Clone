import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URI);
        console.log(`Connected to MONGODB ${conn.connection.host}`);
    } catch (error) {
        console.log("Connection error to MONGODB", error.message);
        process.exit(1)
    }
}