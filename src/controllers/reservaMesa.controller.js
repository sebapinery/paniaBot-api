import {
  getAllReservas,
  createReservation,
  getOneReserva,
  deleteReserva,
  updateReserva
} from "../database/repository/reservaMesa.repository";



export const getAllReservasController = async (_, res) => {
  try {
    const allReservas = await getAllReservas();
    res.status(200).json(allReservas);
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

export const getOneReservaController = async (req, res) => {
  try {
    const reserva = await getOneReserva(req.params.id);
    res.status(200).json(reserva);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteReservaByIdController = async (req, res) => {
  try {
    const deletedReserva = await deleteReserva(req.params.id);
    res.status(200).json(deletedReserva);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateReservaController = async (req, res) => {
  const { params, body } = req;
  try {
    const updatedReserva = await updateReserva(params.id, body);
    res.status(200).json(updatedReserva)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
