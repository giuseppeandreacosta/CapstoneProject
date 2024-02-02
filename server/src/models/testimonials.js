// models/testimonial.js
import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  // Aggiungi la validazione che il campo sia obbligatorio
  },
  age: {
    type: Number,
    required: true,
    min: 1,  // Aggiungi la validazione che il campo sia un numero positivo
  },
  content: {
    type: String,
    required: true,
  },
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

export default Testimonial;
