import postReelModel from '../models/postReelModel.js';
import usersModel from '../models/userModel.js';
import apiError from '../utils/apiError.js';
import apiResponse from '../utils/apiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';
import uplodaImageCloudinary from '../utils/cloudinary.js';

export const createPostReel = asyncHandler(async (req, res, next) => {
    try {
        const { id } = req.user;
        const { description, tag } = req.body;

        if (!id) {
            return next(new apiError(403, 'User id not found...Please try again'));
        }

        const user = await usersModel.findById({ _id: id });

        if (!user) {
            return next(new apiError(403, 'User not found...'));
        }

        const postReel = await postReelModel.create({
            tag,
            description,
            user: id,
        });


        if (req.file) {
            try {
                const reelVedio = req.file;

                const res = await uplodaImageCloudinary(reelVedio.path);

                postReel.reel.public_id = res.public_id;
                postReel.reel.secure_url = res.secure_url;

                await postReel.save();

            } catch (error) {
                console.log(error);
                return next(new apiError(402, 'Reel upload Failed...'));
            }
        }

        if (!postReel) {
            return next(new apiError(403, 'Post not created please try again...'));
        }

        await postReel.save();

        return res.status(201).json(
            new apiResponse(200, postReel, 'Post Created Successfully')
        )


    } catch (error) {
        console.log(error);
        return next(new apiError(500, error.message));
    }
});

export const getAllReelPost = asyncHandler(async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const allPosts = await postReelModel.find({}).skip((page - 1) * limit).limit(limit).sort({ createdAt: -1 });

        if (allPosts.length === 0) {
            return next(new apiError(403, 'Post not found...'));
        }

        return res.status(201).json(
            new apiResponse(200, allPosts, 'Post find succcessfully...')
        )

    } catch (error) {
        return next(new apiError(500, error.message));
    }
})

export const getSingleReelPost = asyncHandler(async (req, res, next) => {
    try {
        const { id } = req.params;

        const reel = await postReelModel.findById({ _id: id });

        if (!reel) {
            return next(new apiError(403, 'Post not found...'));
        }

        return res.status(201).json(
            new apiResponse(200, reel, 'Post find succcessfully...')
        )

    } catch (error) {
        return next(new apiError(500, error.message));
    }
})

export const deleteReelPost = asyncHandler(async (req, res, next) => {
    try {

    } catch (error) {
        return next(new apiError(500, error.message));
    }
})