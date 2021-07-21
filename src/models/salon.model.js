import { Schema, model } from "mongoose";

const salonSchema = new Schema({
  name: { type: String, required: true }, // contra la baranda
  ubicacion: { type: String, required: true }, // terraza - salon - galeria
  vacantes: { type: Number, required: true }, // 24
  maxVacantes: { type: Number, required: true }, // 30 
  date: { type: Date, required: true}, //
  estado: { type: Boolean, required: true } //
});

const Salon = model("Salon", salonSchema);

export default Salon;