import { createCardController, getCardController } from "../controller/card.controller.js";
import { Router } from "express";

const router = Router();

router.post("/create-card", createCardController);
router.get("/get-cards", getCardController);
export default router;