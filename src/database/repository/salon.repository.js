import Salon from "../../models/salon.model";
import { Schema, Types } from "mongoose";

export const getAllSalons = () => {
  return Salon.find();
};

export const createSalon = async (body) => {
  const newSalon = await Salon.create(body);
  return newSalon;
};

export const getOneSalon = async (id) => {
  const agregation = await Salon.aggregate([
    {
      $match: { _id: new Types.ObjectId(id) },
    },
    {
      $lookup: {
        from: "reservamesas",
        localField: "_id",
        foreignField: "dateOfAppointment",
        as: "reservasDelDia",
      },
    },
    {
      $addFields: {
        totalComensales: { $sum: "$reservasDelDia.qty" },
        totalReservas: { $size: "$reservasDelDia" },
        disponibilidad: {
          $subtract: ["$maxVacantes", { $sum: "$reservasDelDia.qty" }],
        },
      },
    },
  ]);

  // console.log(agregation[0].totalComensales);

  return agregation;
};

export const availabilityCheck = async (date, qty) => {
  const { _id, maxVacantes } = await Salon.findOne({ date: { $eq: date } });
  if (!_id) return false; // EL DIA NO ESTA CREADO
  if (maxVacantes < qty) return false; // LA CANT SOLICITADA ES MAYOR AL MAX DE CAPACIDAD

  const agregation = await Salon.aggregate([
    {
      $match: { _id: new Types.ObjectId(_id) },
    },
    {
      $lookup: {
        from: "reservamesas",
        localField: "_id",
        foreignField: "dateOfAppointment",
        as: "reservasDelDia",
      },
    },
    {
      $addFields: {
        totalComensales: { $sum: "$reservasDelDia.qty" },
        totalReservas: { $size: "$reservasDelDia" },
        disponibilidad: {
          $subtract: ["$maxVacantes", { $sum: "$reservasDelDia.qty" }],
        },
      },
    },
  ]);

  const disponibilidad = agregation[0].disponibilidad;
  if (disponibilidad < 2) return false; // MENOS DE 2 LUGARES RETURN FALSE
  else if (disponibilidad < qty) return false;
  else return true;

};

export const deleteSalon = async (id) => {
  const deleted = await Salon.findByIdAndDelete(id);
  return deleted;
};

export const updateSalon = async (id, bodyToUpdate) => {
  const updated = await Salon.findByIdAndUpdate(
    id,
    bodyToUpdate,
    (err, res) => {
      if (err) throw new Error(err);
    }
  );

  return updated;
};
