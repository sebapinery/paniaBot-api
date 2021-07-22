import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

// IMPORT DB CONNECTION
import { dbConnection } from "./database/index";

// IMPORT ROUTES
import reservaMesaRouter from "./routes/reservaMesa.routes";
import salonRouter from "./routes/salon.routes";

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//////////////////
///// ROUTES /////
//////////////////
app.use("/reservas", reservaMesaRouter);
app.use("/salon", salonRouter);


// ERROR HANDLER
app.use(async (_, res, next) => {
  next(createError.NotFound("Path not found"));
});

app.use((err, _, res, next) => {
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
    console.log(`🚀 Server running on port ${port} `);
    dbConnection();
  } catch (error) {
    console.log(error.message);
  }
});
