import usersModel from "../models/userModel";
import apiError from "../utils/apiError";
import asyncHandler from "../utils/asyncHandler";
import otpModel from '../models/otpModel';
import otpGenerator from 'otp-generator';

const sendOtp = asyncHandler(async (req, res, next) => {
    try {
        const { email, userName } = req.body;

        if (!email || !userName) {
            return next(new apiError(400, "Please fill all information"))
        }

        const existUser = await usersModel.findOne({
            $or: [{ userName }, { email }]
        });

        if (existUser) {
            return next(new apiError(400, "Email and Username already exist"))
        }

        let otp = otpGenerator.generate(6, {
            lowerCaseAlphabets: false,
            upperCaseAlphabets: false,
            specialChars: false,
        });

        const result = await otpModel.findOne({ otp: otp });

        while (result) {
            otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
            });
        }

        const savedOtp = await otpModel.create({ otp, email, userName });

        return res.status(201).json(
            new apiResponse(200, savedOtp, 'Otp send successfully...')
        )


    } catch (error) {
        console.log(error);
        next(new apiError(500, error.message))
    }
})

export const registerUser = asyncHandler(async (req, res, next) => {
    const { firstName, lastName, userName, email, phoneNumber, password, otp } = req.body;

    if (!firstName || !email || !userName || !password || !otp) {
        return next(new apiError(400, "Please fill all information"))
    }

    try {
        const userExist = await usersModel.findOne({
            $or: [{ userName }, { email }]
        });

        if (userExist) {
            return next(new apiError(400, "Email and Username already exist"))
        }

        const response = await otpModel.findOne({
            $or: [{ userName }, { email }]
        }).sort({ createdAt: -1 }).limit(1);

        if (response.otp.length === 0) {
            return next(new apiError(403, 'Otp is not found please try again...'));
        } else if (response.otp !== otp) {
            return next(new apiError(403, 'The OTP is not valid...'));
        }

        const user = await usersModel.create({
            firstName,
            lastName,
            userName,
            email,
            phoneNumber,
            password,
        })

        await user.save();

        res.status(201).json(
            new apiResponse(200, user, "User Register Successfully")
        )
    } catch (error) {
        console.log(error);
        next(new apiError(500, error.message))
    }
});


export const login = asyncHandler(async (req, res, next) => {
    try {

        const { email, userName, password } = req.body;

        if (!email, !userName, !password) {
            return next(new apiError(400, "Please fill all information"));
        }

        const user = await usersModel.findOne({
            $or: [{ userName }, { email }]
        })

        if (!user) {
            return next(new apiError(403, 'User not exists,Please register this account...'));
        }

        if (!(await user.comparePassword(password))) {
            return next(new apiError(403, 'user password is incorrect... please fill again'));
        }

        const token = await user.generateAccessToken();

        console.log('Token -> ', token);

        return res.status(201).cookie('token', token, {
            httpOnly: true,
            secure: true
        }).json(
            new apiResponse(200, user, "User Register Successfully")
        )

    } catch (error) {
        console.log(error.message);
        next(new apiError(500, error.message));
    }
});

export const getAllUser = asyncHandler(async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const user = await usersModel.find({}).skip((page - 1) * limit).limit(limit).sort({ createdAt: -1 });

        if (!user) {
            return next(new apiError(402, 'User is not found please try again...'));
        }

        return res.status(201).json(
            new apiResponse(200, user, 'User find successfully...')
        )

    } catch (error) {
        console.log(error.message);
        next(new apiError(500, error.message));
    }
});

export const singleUser = asyncHandler(async (req, res, next) => {
    try {
        const { id } = req.params;

        const user = await usersModel.findById({ _id: id });

        if (!user) {
            return next(new apiError(402, 'User is not found...'));
        }

        return res.status(201).json(
            new apiResponse(200, user, 'User find successfully...')
        )

    } catch (error) {
        console.log(error);
        next(new apiError(500, error.message));
    }
});

export const logout = asyncHandler(async (req, res, next) => {
    try {

        return res.status(200).clearCookie('token', {
            httpOnly: true,
            secure: true
        }).json(
            new ApiResponse(200, {}, "User logged Out")
        )

    } catch (error) {
        console.log(error);
        return next(new apiError(500, error.message));
    }
});

export const userSearch = asyncHandler(async (req, res, next) => {
    try {
        const { userName } = req.query;

        const user = usersModel.find({
            userName: { $regex: userName, $options: 'i' }
        });

        if (!user) {
            return next(new apiError(403, 'user is not found...'));
        }

        return res.status(201).json(
            new apiResponse(200, user, 'search successfully...')
        )

    } catch (error) {
        console.log(error);
        next(new apiError(500, error.message));
    }
});

export const profileUpdate = asyncHandler(async (req, res, next) => {
    try {

        const { firstName, lastName, userName, email, phoneNumber } = req.body;
        const { id } = req.user;

        if (!firstName || !email || !userName) {
            return next(new apiError(400, "Please fill all information"))
        }

        if (!id) {
            return next(new apiError(403, 'User id not found...'));
        }

        const user = await usersModel.findById({ _id: id });

        if (!user) {
            return next(new apiError(402, 'User is not found...'));
        }

        const updateUser = await usersModel.findByIdAndUpdate({ _id: id }, {
            firstName: firstName || user.firstName,
            lastName: lastName || user.lastName,
            userName: userName || user.userName,
            email: email || user.email,
            phoneNumber: phoneNumber || user.phoneNumber,
        }, { new: true });

        if (!updateUser) {
            return next(new apiError(404, 'User update not successfully...please try again'));
        }

        return res.status(201).json(
            new apiResponse(200, updateUser, 'Successfully updated...')
        )

    } catch (error) {
        console.log(error);
        next(new apiError(500, error.message));
    }
});

export const deleteAccount = asyncHandler(async (req, res, next) => {
    try {
        const { id } = req.user;

        if (!id) {
            return next(new apiError(404, 'user id is not find please try again later...'));
        }

        await usersModel.findByIdAndDelete({ _id: id });

        return res.status(201).json(
            new apiResponse(200, null, 'user deleted successfully...')
        )

    } catch (error) {
        console.log(error);
        return next(new apiError(500, error.message));
    }
});

export const changePassword = asyncHandler(async (req, res, next) => {
    try {
        const { password, newPassword, comfirmPassword } = req.body;
        const { id } = req.user;

        if (!password || !newPassword || !comfirmPassword) {
            return next(new apiError(400, "Please fill all information"))
        }

        if (!id) {
            return next(new apiError(404, 'user id is not find please try again later...'));
        }

        const user = await usersModel.findById({ _id: id });

        if (!(await user.comparePassword(password))) {
            return next(new apiError(403, 'user password is incorrect... please fill again'));
        }

        user.password = newPassword;

        await user.save();

        return res.status(201).json(
            new apiResponse(200, user, 'Change password successfully...')
        )

    } catch (error) {
        console.log(error);
        return next(new apiError(500, error.message));
    }
});

export const forgotPassword = asyncHandler(async (req, res, next) => {
    try {

    } catch (error) {
        console.log(error);
        return next(new apiError(500, error.message));
    }
});