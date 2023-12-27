import mongoose, { Schema, model } from "mongoose";

const postVideoSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "Users",
        required: true
    },
    description: {
        type: String
    },
    tag: {
        type: String
    },
    video: {
        public_id: {
            type: String,
            required: true
        },
        secure_url: {
            type: String,
            required: true
        }
    }
}, { timestamps: true }
);

const postVideoModel = model("PostReels", postVideoSchema);
export default postVideoModel;