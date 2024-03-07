import express from 'express';
import { getAllUsers, createUser, updateUser, deleteUser } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.get('/users/', getAllUsers);
userRouter.post('/users/', createUser);
userRouter.put('/users/:id', updateUser);
userRouter.delete('/users/:id', deleteUser);

export default userRouter;

// http://localhost:3000/users/users