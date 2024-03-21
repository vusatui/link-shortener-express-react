import mongoose, { Document, Schema } from "mongoose";

export interface IShortUrl extends Document {
    displayName: string;
    originalUrl: string;
    shortId: string;
    userId: Schema.Types.ObjectId;
    createdAt: Date;
}

const ShortUrlSchema = new Schema<IShortUrl>({
    displayName: { type: String, required: true },
    originalUrl: { type: String, required: true },
    shortId: { type: String, required: true, unique: true },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now },
});

const ShortUrlModel = mongoose.model<IShortUrl>("ShortUrl", ShortUrlSchema);

ShortUrlSchema.index({ userId: 1, originalUrl: 1 }, { unique: true });

export default ShortUrlModel;
