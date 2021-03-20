import { Router } from "express";
const user = require("../controllers/user.controller.js");

const router = Router();

router.get("/:id", user.getUser);

export default router;
