import mongoose, { Document, Schema } from "mongoose";

interface IShortUrl extends Document {
    originalUrl: string;
    shortId: string;
    userId: Schema.Types.ObjectId;
    createdAt: Date;
}

const ShortUrlSchema = new Schema<IShortUrl>({
    originalUrl: { type: String, required: true },
    shortId: { type: String, required: true, unique: true },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now },
});

const ShortUrlModel = mongoose.model<IShortUrl>("ShortUrl", ShortUrlSchema);

export default ShortUrlModel;