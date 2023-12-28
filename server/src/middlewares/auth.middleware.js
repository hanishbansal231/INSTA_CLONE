import apiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from 'jsonwebtoken';

export const isLoggedIn = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies.token;
        // console.log(token);
        if (!token) {
            return next(new apiError(403, 'Token is not found...please try again'));
        }

        const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        if (decodeToken) {
            req.user = decodeToken;
        }

        next();


    } catch (error) {
        console.log(error);
        return next(new apiError(500, error.message))
    }
})