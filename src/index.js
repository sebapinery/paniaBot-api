import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

// IMPORT DB CONNECTION
import { dbConnection } from "./database/index";

// IMPORT ROUTES
import reservaMesaRouter from "./routes/reservaMesa.routes";

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/reservas", reservaMesaRouter);

// ERROR HANDLER
app.use(async (req, res, next) => {
  next(createError.NotFound("Path not found"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

// SERVER START
app.listen(port, () => {
  try {
    console.log(`Server running on port ${port} 🚀`);
    dbConnection();
  } catch (error) {
    console.log(error.message);
  }
});
