import {Router} from 'express';
import { register } from '../modules/auth/models/controller/authController.js';

export const authRouter = Router();

authRouter.post('/register', register);