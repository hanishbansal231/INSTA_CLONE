import usersModel from "../models/userModel";
import apiError from "../utils/apiError";

export const registerUser = async (req, res, next) => {
    const { firstName, lastName, userName, email, phoneNumber, password } = req.body;
    if (!firstName || !email || !userName || !password) {
        return next(new apiError(400, "Please fill all information"))
    }
    try {
        const userExist = await usersModel.findOne({ email });
        if (userExist) {
            return next(new apiError(400, "Email already exist"))
        }

        const user = await usersModel.create({
            firstName,
            lastName,
            userName,
            email,
            phoneNumber
        })

        await user.save();

        res.status(201).json(
            new apiResponse(200, user, "User Register Successfully")
        )
    } catch (error) {
        console.log(error);
        next(new apiError(500, error.message))
    }
}