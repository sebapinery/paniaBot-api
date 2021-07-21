import { Router } from "express";

import {
  getAllReservasController,
  createReservaMesa,
  getOneReservaController,
  deleteReservaByIdController
} from "../controllers/reservaMesa.controller";

const router = Router();

router.get('/:id',getOneReservaController)
router.get("/", getAllReservasController);
router.post("/", createReservaMesa);
router.delete('/:id', deleteReservaByIdController)

export default router;
