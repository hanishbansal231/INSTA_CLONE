import { Router } from "express";
import { createPostImage } from "../controllers/postImageController.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router
    .route('/create-post-image')
    .post(upload.fields(
        [
            { name: 'images', maxCount: 10 }
        ]),
        createPostImage);

export default router;