import { Router } from "express";
const auth = require("../controllers/auth.controller.js");

const router = Router();

router.get("/", auth.logout);

export default router;
