import {
  getAllReservas,
  createReservation,
} from "../database/repository/reservaMesa.repository";

export const getAllReservasController = async (_, res) => {
  try {
    const allReservas = await getAllReservas();
    res.status(200).json(allAuthors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createReservaMesa = async (req, res) => {
  try {
    const createdReserva = await createReservation(req.body);
    res.status(201).json(createdReserva);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
