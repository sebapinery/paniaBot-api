import { Router } from "express";

import {
  getAllReservasController,
  createReservaMesa,
  getOneReservaController,
  deleteReservaByIdController,
  updateReservaController
} from "../controllers/reservaMesa.controller";

const router = Router();

router.get('/:id',getOneReservaController)
router.get("/", getAllReservasController);
router.post("/", createReservaMesa);
router.delete('/:id', deleteReservaByIdController)
router.patch("/:id", updateReservaController);

export default router;
