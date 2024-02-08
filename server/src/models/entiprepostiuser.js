import mongoose from "mongoose";




const entiPrepostiUserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
 
});

const entiPrepostiUser = mongoose.model("EntiPrepostiUser", entiPrepostiUserSchema,'entiprepostiuser');

export default entiPrepostiUser;