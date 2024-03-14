import mongoose from "mongoose";


export const initDb = async () => {
    await mongoose.connect("mongodb://localhost:27017/link-shortener-express-react");
};
