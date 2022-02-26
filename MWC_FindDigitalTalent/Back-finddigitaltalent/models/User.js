const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio']
    },
    description: {
        type: String,
        required: [true, 'La descripción es obligatoria']
    },
    country: {
        type: String,
        required: [true, 'El pais es obligatorio']
    },
    cityOfResidence: {
        type: String,
        required: [true, 'La ciudad de residencia es obligatoria']
    },
    image: String,
    yearsOfExperience: {
        type: Number,
        required: [true, 'Los años de experiencia son obligatorios']
    },
    sector: {
        type: String,
        required: [true, 'El sector es obligatorio']
    },
    skills: []

}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;