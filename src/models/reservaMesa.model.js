import { Schema, model } from "mongoose";

const reservaMesaSchema = new Schema({
  name: { type: String, required: true }, // Nicolas
  phone: { type: Number, required: true }, // 35416258741
  instagram: { type: String }, // nicopinery
  facebook: { type: String }, // Nicolas Pinery
  email: { type: Number }, // nicopinery@gmail.com
  qty: { type: Number, required: true }, // 4
  dateOfAppointment: { type: String, required: true }, // 23/07/2021
  typeAmenitie: { type: String, required: true }, // merienda
  time: { type: String, required: true }, // 14hrs
  qtyKids: { type: Number }, // 0
  comments: { type: String }, // Viene una persona celiaca
  amountReserva: { type: Number }, // precio fijado por adelantado
  pagoAdelantado: { type: Number }, // seña que paga el cliente por adelantado
  pagoFinal: { type: Number },
});

const ReservaMesa = model("ReservaMesa", reservaMesaSchema);

export default ReservaMesa;
