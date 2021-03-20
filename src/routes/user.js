import { Router } from "express";
const user = require("../controllers/user.controller.js");

const router = Router();

router.get("/:id", user.getUser);

router.post("/", user.createUser);

router.delete("/", user.deleteUser);

router.put("/:id", user.updateUser);

export default router;
