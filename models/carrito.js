const { Schema, model} = require('mongoose')

const CarritoSchema = new Schema ({
    idUsuario: {
        type: String
    },
    productos: []
})

CarritoSchema.methods.toJSON = function () {
    const { __v,  ...carrito} = this.toObject();
    return carrito;
  };

const Carrito = model('Carrito', CarritoSchema)
module.exports = Carrito