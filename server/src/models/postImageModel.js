import mongoose, { Schema, model } from "mongoose";

const postImageSchema = new Schema({
    // user: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "Users",
    //     required: true
    // },
    description: {
        type: String
    },
    tag: {
        type: String
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            secure_url: {
                type: String,
                required: true
            }
        }
    ]
}, { timestamps: true }
);

const postImageModel = model("PostImages", postImageSchema);
export default postImageModel;