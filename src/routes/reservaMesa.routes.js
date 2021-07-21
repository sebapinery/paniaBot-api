import { Router } from "express";

import {
  getAllReservasController,
  createReservaMesa,
} from "../controllers/reservaMesa.controller";

const router = Router();

router.get("/", getAllReservasController);
router.post("/", createReservaMesa);

export default router;
