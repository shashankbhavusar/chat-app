import { Router } from "express";
import authRouters from "./auth.route";

const routes = Router();

routes.use('/auth', authRouters);

export default routes;