import ReservaMesa from '../../models/reservaMesa.model'

export const getAllReservas = () => {
    return ReservaMesa.find()
}

export const createReservation = async (body) => {
    const newReserva = await ReservaMesa.create(body);
    return newReserva;
}