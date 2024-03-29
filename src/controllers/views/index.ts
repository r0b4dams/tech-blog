import { Router } from "express";
import { authorize } from "../../middleware";
import * as views from "./viewHandlers";

const router = Router();

router.get("/", views.home);
router.get("/signup", views.signup);
router.get("/login", views.login);
router.get("/dashboard", authorize, views.dashboard);
router.get("/dashboard/new", authorize, views.newPost);
router.get("/dashboard/edit/:post_id", authorize, views.editPost);
router.get("/posts/:post_id", views.singlePost);
router.get("*", views._404);

export { router as viewRoutes };
