import mongoose from "mongoose";


const connectDatabase = async () => {
  try {
    const data = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected with server: ${data.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
};

export default connectDatabase;
