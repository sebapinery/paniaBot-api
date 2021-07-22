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
      $match: { _id: new Types.ObjectId(id) }
    },
    {
      $lookup: {
        from: 'reservamesas',
        localField: '_id',
        foreignField: 'dateOfAppointment',
        as: 'reservasDelDia'
      }
    }
  ]);

  return agregation;
};

export const availabilityCheck = async (date, qty) => {
  const dateExist = await Salon.findOne({ date: { $eq: date } });
  if (!dateExist) return false 
  if(dateExist.maxVacantes < qty) return false
  if(dateExist.vacantes <= 1) return false
  if(dateExist.vacantes < qty) return false
  if(dateExist.vacantes <= dateExist.maxVacantes) return true
  else return false

  // return dateExist;
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
