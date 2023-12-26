import { Schema, model } from "mongoose";
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        unique: true
    },
    profilePicture: {
        public_id: {
            type: String,
        },
        secure_url: {
            type: String,
        }
    },
    coverPicture: {
        public_id: {
            type: String,
        },
        secure_url: {
            type: String,
        }
    },
    liveIn: {
        type: String
    },
    worksAt: {
        type: String
    },
    relationship: {
        type: String
    },
    about: {
        type: String
    },
    country: {
        type: String
    },
    followers: [],
    following: [],
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    }

},
    { timestamps: true }
);

const usersModel = model("Users", userSchema);
export default usersModel;