import mongoose, { Document, Schema } from "mongoose";

interface IClickStat extends Document {
    shortUrlId: Schema.Types.ObjectId;
    clickedAt: Date;
    referrer: string;
    ipAddress: string;
    userAgent: string;
}

const ClickStatSchema = new Schema<IClickStat>({
    shortUrlId: { type: Schema.Types.ObjectId, ref: "ShortUrl" },
    clickedAt: { type: Date, default: Date.now },
    referrer: { type: String },
    ipAddress: { type: String, required: true },
    userAgent: { type: String },
});

const ClickStatModel = mongoose.model<IClickStat>("ClickStat", ClickStatSchema);

export default ClickStatModel;
