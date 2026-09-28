import mongoose from "mongoose";

export const db = mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => {
        console.log("MongoDB Connected Successfully");
    })
    .catch((error) => {
        console.log("Error while connecting MongoDB:", error);
    });
