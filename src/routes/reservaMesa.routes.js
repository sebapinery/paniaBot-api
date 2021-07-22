import { Router } from "express";

import { availabilityCheckMiddleware } from "../middlewares/availability.middleware";


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
router.post("/", availabilityCheckMiddleware, createReservaMesa);
router.delete('/:id', deleteReservaByIdController)
router.patch("/:id", updateReservaController);

export default router;
