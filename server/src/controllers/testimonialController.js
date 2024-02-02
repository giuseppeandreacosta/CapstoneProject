// controllers/testimonialController.js
import Testimonial from '../models/testimonials.js';

export const createTestimonial = async (req, res) => {
  try {
    const { name, age, content } = req.body;

    // Validazione aggiuntiva dei dati
    if (!name || !age || !content) {
      return res.status(400).json({ message: 'Assicurati di fornire tutti i dati necessari.' });
    }

    const newTestimonial = await Testimonial.create({
      name,
      age,
      content,
    });

    res.status(201).json(newTestimonial);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore durante la creazione della testimonianza.' });
  }
};

export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore durante il recupero delle testimonianze.' });
  }
};
