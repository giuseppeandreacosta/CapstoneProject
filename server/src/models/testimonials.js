// models/testimonial.js
import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  
  },
  age: {
    type: Number,
    required: true,
    min: 1,  
  },
  content: {
    type: String,
    required: true,
  },
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

export default Testimonial;
