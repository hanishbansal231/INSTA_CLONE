import { Router } from 'express';
import { changePassword, deleteAccount, forgotPasswordToken, getAllUser, login, logout, profileUpdate, registerUser, sendOtp, singleUser, userSearch } from '../controllers/userController.js';
import { isLoggedIn } from '../middlewares/auth.middleware.js';

const router = Router();

// - Post
router.route('/send-otp').post(sendOtp);
router.route('/register').post(registerUser);
router.route('/login').post(login);
router.route('/forgot-password-token').post(forgotPasswordToken);

// - Put
router.route('/update').put(isLoggedIn, profileUpdate);
router.route('/change-password').put(isLoggedIn, changePassword);

// - Get
router.route('/all-user').get(isLoggedIn, getAllUser);
router.route('/single-user').get(isLoggedIn, singleUser);
router.route('/logout').get(isLoggedIn, logout);
router.route('/search').get(isLoggedIn, userSearch);

// - Delete
router.route('/delete-user').delete(isLoggedIn, deleteAccount);

export default router;