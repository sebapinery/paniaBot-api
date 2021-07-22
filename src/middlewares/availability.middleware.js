import { availabilityCheck } from "../database/repository/salon.repository";

export const availabilityCheckMiddleware = async(req, res, next) => {
    const { date, qty } = req.body;
    const isAvailable = await availabilityCheck(date, qty)
    if(isAvailable) next();
    else res.status(400).json(false);
}