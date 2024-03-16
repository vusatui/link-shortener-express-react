import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    createdAt: Date;
}

const UserSchema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

UserSchema.pre<IUser>("save", async function(next) {
    if (this.isModified("password") || this.isNew) {
        this.password = await bcrypt.hash(this.password, await bcrypt.genSalt(10));
    }
    next();
});

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
