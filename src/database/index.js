import mongoose from 'mongoose';

export const dbConnection = () => {
  try {
    mongoose.connect('mongodb://localhost/primex', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('DB is connect');
  } catch (error) {
    console.log(error);
  }
};
