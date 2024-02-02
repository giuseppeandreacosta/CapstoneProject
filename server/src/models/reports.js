// models/report.js
import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
  name: {
    type: String,
   
  },
  age: {
    type: Number,
   
  },
  gender: {
    type: String,
   
  },
  email: {
    type: String,
   
  },
  location: {
    type: String,
   
  },
  description: {
    type: String,
   
  },
});

const Report = mongoose.model('Report', reportSchema);

export default Report;
