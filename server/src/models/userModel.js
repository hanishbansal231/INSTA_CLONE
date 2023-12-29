import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

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
    password: {
        type: String,
        required: true,
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
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,

},
    { timestamps: true }
);

userSchema.pre('save', async function (next) {
    try {

        if (!this.isModified('password')) {
            return next();
        }

        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();

    } catch (error) {
        console.log(error);
    }
});

userSchema.methods.comparePassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        console.log(error);
    }
}

userSchema.methods.generateAccessToken = function () {
    try {
        return jwt.sign({
            id: this.id,
            email: this.email,
            username: this.userName,
            fullname: this.fullname
        },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
            }
        )
    } catch (error) {
        console.log(error);
    }
}

userSchema.methods.generateForgotPasswordToken = function () {
    try {
        const randomUrl = crypto.randomBytes(20).toString('hex');

        this.forgotPasswordToken = crypto
            .createHash('sha256')
            .update(randomUrl)
            .digest('hex')

        this.forgotPasswordExpiry = Date.now() + 15 * 60 * 1000;
        return randomUrl;

    } catch (error) {
        console.log(error);
    }
}

const usersModel = model("Users", userSchema);
export default usersModel;