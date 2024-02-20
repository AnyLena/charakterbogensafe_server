import mongoose from "mongoose";

export const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB)
        console.log("Database connection successful")
    } catch (error) {
        console.log("Database conection failed: ", error.message);
        process.exit(1)
    }
}