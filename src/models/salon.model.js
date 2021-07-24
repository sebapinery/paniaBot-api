import { Schema, model } from "mongoose";

const salonSchema = new Schema({
  name: { type: String, required: true }, // contra la baranda
  ubicacion: { type: String, required: true }, // terraza - salon - galeria
  maxVacantes: { type: Number, required: true }, // 30 
  date: { type: Date, required: true}, //
  estado: { type: Boolean, required: true } // TRUE = DISPONIBLE && FALE = NO DISPONIBLE
});

const Salon = model("Salon", salonSchema);

export default Salon;