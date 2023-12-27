import { Router } from 'express';
import { changePassword, deleteAccount, forgotPasswordToken, getAllUser, login, logout, profileUpdate, registerUser, sendOtp, singleUser, userSearch } from '../controllers/userController.js';

const router = Router();

// - Post
router.route('/send-otp').post(sendOtp);
router.route('/register').post(registerUser);
router.route('/login').post(login);
router.route('/forgot-password-token').post(forgotPasswordToken);

// - Put
router.route('/update').put(profileUpdate);
router.route('/change-password').put(changePassword);

// - Get
router.route('/all-user').get(getAllUser);
router.route('/single-user').get(singleUser);
router.route('/logout').get(logout);
router.route('/search').get(userSearch);

// - Delete
router.route('/delete-user').delete(deleteAccount);

export default router;