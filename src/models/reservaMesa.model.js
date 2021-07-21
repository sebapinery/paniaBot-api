import { Schema, model } from "mongoose";

const reservaMesaSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  qty: { type: Number, required: true },
  dateOfAppointment: { type: Date, required: true },
  typeAmenitie: { type: String, required: true },
  time: { type: String, required: true },
  qtyKids: { type: Number },
  email: { type: Number },
  comments: { type: String },
  instagram: { type: String },
  facebook: { type: String },
});

const ReservaMesa = model("ReservaMesa", reservaMesaSchema);

export default ReservaMesa;
