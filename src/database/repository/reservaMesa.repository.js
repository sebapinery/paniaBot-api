import ReservaMesa from "../../models/reservaMesa.model";
import Salon from "../../models/salon.model";

export const getAllReservas = () => {
  return ReservaMesa.find();
};

export const createReservation = async (body) => {
  const dateExist = await Salon.findOne({ date: { $eq: body.date } });

  const newReserva = await ReservaMesa.create({...body, dateOfAppointment: dateExist._id});
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

export const updateReserva = async (id, bodyToUpdate) => {
  const updated = await ReservaMesa.findByIdAndUpdate(id, bodyToUpdate, (err, res) => {
    if(err) throw new Error(err)
  });

  return updated;
};
