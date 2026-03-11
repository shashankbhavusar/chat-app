import { Router } from "express";
import authRouters from "./auth.route";
import chatRoutes from "./chat.route";
import userRoutes from "./user.route";

const routes = Router();

routes.use('/auth', authRouters);
routes.use("/chat", chatRoutes);
routes.use("/user", userRoutes);

export default routes;