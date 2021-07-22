import mongoose from "mongoose";

const uri = process.env.MONGO_URI || "mongodb://localhost";
const dbName = process.env.MONGO_DB_NAME || "primex";

export const dbConnection = () => {
  try {
    mongoose.connect(
      `${uri}/${dbName}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      },
      () => {
        console.log(`🌱 MongoDb is connected on URI ${uri}/${dbName}`);
      }
    );
    // console.log('DB is connect');
  } catch (error) {
    console.log(error);
  }
};
