import mongoose, { Schema, model } from "mongoose";

const postReelSchema = new Schema({
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
    reel: {
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

const postReelModel = model("PostReels", postReelSchema);
export default postReelModel;