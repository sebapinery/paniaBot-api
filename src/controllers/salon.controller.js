import {
    createSalon,
    getAllSalons,
    deleteSalon,
    getOneSalon,
    updateSalon

  } from "../database/repository/salon.repository";
  
  
  
  export const getAllSalonsController = async (_, res) => {
    try {
      const allSalons = await getAllSalons();
      res.status(200).json(allSalons);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const createSalonMesa = async (req, res) => {
    try {
      const createdSalon = await createSalon(req.body);
      
      res.status(201).json(createdSalon);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const getOneSalonController = async (req, res) => {
    try {
      const salon = await getOneSalon(req.params.id);
      res.status(200).json(salon);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const deleteSalonByIdController = async (req, res) => {
    try {
      const deletedSalon = await deleteSalon(req.params.id);
      res.status(200).json(deletedSalon);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const updateSalonController = async (req, res) => {
    const { params, body } = req;
    try {
      const updatedSalon = await updateSalon(params.id, body);
      res.status(200).json(updatedSalon)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  