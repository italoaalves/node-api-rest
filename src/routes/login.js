import { Router } from "express";
const auth = require("../controllers/auth.controller.js");

const router = Router();

router.post("/", auth.login);

export default router;
