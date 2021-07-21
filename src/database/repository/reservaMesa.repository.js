import ReservaMesa from "../../models/reservaMesa.model";

export const getAllReservas = () => {
  return ReservaMesa.find();
};

export const createReservation = async (body) => {
  const newReserva = await ReservaMesa.create(body);
  return newReserva;
};

export const getOneReserva = async (id) => {
  const reservaFound = await ReservaMesa.findById(id);
  return reservaFound;
};

export const deleteReserva = async (id) => {
  const deleted = await ReservaMesa.findByIdAndDelete(id);
  return deleted;
};
