const { Schema, model } = require('mongoose'); 

const usuarioSchema = new Schema({
  nombres: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  apellido: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  rol: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
    maxLength: 30,
  },
  contrasenia: {
    type: String,
    minLength: 4,
    maxLength: 70,
    required: true,
  },
  pago: {
    type: Boolean,
    required: true,
  },
  arrayProductos: [],
});

usuarioSchema.methods.toJSON = function () {
  const { __v, contrasenia, ...usuario } = this.toObject();
  return usuario;
};

const usuarioModelo = model('usuarios', usuarioSchema);

module.exports = usuarioModelo;
