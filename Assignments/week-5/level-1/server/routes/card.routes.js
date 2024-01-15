import { createCardController } from "../controller/card.controller.js";
import { Router } from "express";

const router = Router();

router.post("/create-card", createCardController);

export default router;