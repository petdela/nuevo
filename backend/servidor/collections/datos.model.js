var mongoose = require('mongoose');

const ServiciosSchema = new mongoose.Schema({
    _id: {
        type: Object,
    },
    Fecha: {
        type: String,
    },
    Nombre: {
        type: String,
    },
    Modificacion: {
        type: String,
    }
    });
module.exports = mongoose.model('Servicios', ServiciosSchema, "Servicios");