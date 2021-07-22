import { Router } from "express";

import {
  createSalonMesa,
  deleteSalonByIdController,
  getAllSalonsController,
  getOneSalonController,
  updateSalonController

} from "../controllers/salon.controller";

const router = Router();

router.get('/:id',getOneSalonController)
router.get("/", getAllSalonsController);
router.post("/", createSalonMesa);
router.delete('/:id', deleteSalonByIdController)
router.patch("/:id", updateSalonController);

export default router;
