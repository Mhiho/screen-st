import mongoose from 'mongoose';

export const connection = async () => {
  try {
    await mongoose.connect('mongodb://root:password@localhost:27017');
    console.log('mongo connected');
  } catch (err) {
    console.log(`error: ${err}`);
  }
};
