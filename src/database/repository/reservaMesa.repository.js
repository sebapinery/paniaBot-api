import ReservaMesa from "../../models/reservaMesa.model";
import Salon from "../../models/salon.model";
import { Schema, Types } from "mongoose";

export const getAllReservas = () => {
  return ReservaMesa.find();
};

export const createReservation = async (body) => {
  const dateExist = await Salon.findOne({ date: { $eq: body.date } });
  const newReserva = await ReservaMesa.create({
    ...body,
    dateOfAppointment: dateExist._id,
  });

  const countReservas = await ReservaMesa.aggregate([
    {
      $group: {
        _id: null,
        total: { $sum: "$qty" },
      },
    },
  ]);


  return newReserva;
};

export const getOneReserva = async (id) => {
  // const reservaFound = await ReservaMesa.findById(id);
  const agregation = await ReservaMesa.aggregate([
    {
      $match: { _id: new Types.ObjectId(id) }
    },
    {
      $lookup: {
        from: 'salons',
        localField: 'dateOfAppointment',
        foreignField: '_id',
        as: 'infoDiaReserva'
      }
    }
  ]);

  return agregation;
};

export const deleteReserva = async (id) => {
  const deleted = await ReservaMesa.findByIdAndDelete(id);
  return deleted;
};

export const updateReserva = async (id, bodyToUpdate) => {
  const updated = await ReservaMesa.findByIdAndUpdate(
    id,
    bodyToUpdate,
    (err, res) => {
      if (err) throw new Error(err);
    }
  );

  return updated;
};
