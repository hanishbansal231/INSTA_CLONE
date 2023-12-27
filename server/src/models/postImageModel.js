import mongoose, { Schema, model } from "mongoose";

const postImageSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    description: {
        type: String
    },
    tag: {
        type: String
    },
    image: {
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

const postImageModel = model("PostImages", postImageSchema);
export default postImageModel;