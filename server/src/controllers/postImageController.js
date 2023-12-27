import postImageModel from '../models/postImageModel.js';
import usersModel from '../models/userModel.js';
import apiError from '../utils/apiError.js';
import apiResponse from '../utils/apiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';
import uplodaImageCloudinary from '../utils/cloudinary.js';

export const createPostImage = asyncHandler(async (req, res, next) => {
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

        const postImage = await postImageModel.create({
            tag,
            description,
            user: id,
        });


        if (req.files) {
            try {
                const imagesFiles = req.files;
                const results = await Promise.all(imagesFiles.images.map((image, idx) => uplodaImageCloudinary(image.path)));
                // console.log(results);

                postImage.images = postImage.images.concat(results.map((result) => ({
                    public_id: result.public_id,
                    secure_url: result.secure_url
                })));

                await postImage.save();

            } catch (error) {
                console.log(error);
                return next(new apiError(402, 'Image upload Failed...'));
            }
        }

        if (!postImage) {
            return next(new apiError(403, 'Post not created please try again...'));
        }

        await postImage.save();

        return res.status(201).json(
            new apiResponse(200, postImage, 'Post Created Successfully')
        )


    } catch (error) {
        console.log(error);
        next(new apiError(500, error.message));
    }
});