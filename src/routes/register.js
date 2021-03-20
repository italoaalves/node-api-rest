import { Router } from "express";
const auth = require("../controllers/auth.controller.js");

const router = Router();

router.post("/", auth.register);

export default router;
