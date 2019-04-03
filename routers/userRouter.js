import express from "express";
import routes from "../routes";
import { editProfile, userDetail, changePassword } from "../controllers/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send('Users'));
userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.userDatail(), onlyPrivate, userDetail);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);

export default userRouter;