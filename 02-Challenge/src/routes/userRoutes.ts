import express, { Router } from 'express';
import UserController from '../controllers/UserController';

const userController = new UserController();
const userRoutes: Router = express.Router();

userRoutes.route('/')
 .get(userController.getAllUsers)
 .post(userController.createUser);

userRoutes.route('/:userId')
 .get(userController.getSingleUser)
 .put(userController.updateUser)
 .delete(userController.deleteUser);

export default userRoutes;