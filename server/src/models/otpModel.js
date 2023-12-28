import { Schema, model } from "mongoose";
import sendEmail from "../utils/sendEmail.js";

const otpSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60 * 5

    }
})

const sendVerificationEmail = async (email, otp) => {
    try {
        const res = sendEmail(email, "Verification Email", otp);
        // console.log(res);
    } catch (error) {
        console.log(error);
    }
}

otpSchema.pre('save', async function (next) {

    if (this.isNew) {
        await sendVerificationEmail(this.email, this.otp);
    }
    next();
})

const optModel = model("OTP", otpSchema)
export default optModel;