process.loadEnvFile();
import mongoose from "mongoose";
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DBURL);
    console.log("databse connected ");
  } catch (error) {
    console.log(error);
  }
};
export default dbConnection;
