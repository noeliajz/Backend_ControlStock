const Producto= require( "../models/producto")
const Usuario = require("../models/usuario")

 const crearProducto = async (req, res) => {
   try {
       const nuevoProducto = new Producto(req.body);       
        await nuevoProducto.validate(); 
        await nuevoProducto.save();
        res.status(201).json({
            mensaje: 'Se creó el producto con éxito',
            producto: nuevoProducto
        });
    } catch (error) {
        console.error('Error al crear producto:', error);
        res.status(400).json({
            mensaje: 'Error al crear producto',
            detalles: error.errors || error.message 
        });
    }
};


 const obtenerTodosProductos = async (req, res) => {
    try {
        const productos = await Producto.find()
        res.status(200).json({
            mensaje: ' se encontraron los productos',
            productos
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: 'error al encontrar productos'
        })
        
    }
}

 const editarProducto = async (req, res) => {
    try {
        const producto = await Producto({_id: req.params.id})
        res.status(200).json({
            mensaje: 'se actualizó el producto',
            producto
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: 'error al actualizar el producto'
        })
    }
}

 const obtenerUnProducto = async(req, res) => {
    try {
        const id = req.params.id;
        const producto = await Producto.findOne({ _id: req.params.id });
        res.status(200).json({
          mensaje: "se encontró al producto",
          producto,
        });
      } catch (error) {
        console.log(error);
        res.status(404).json({
          mensaje: "error al encontrar el producto",
          detalle: error.errors,
        });
      }
}

 const eliminarProducto = async (req, res) => {
    try {
        await Producto.findByIdAndDelete({_id: req.params.id})
        res.status(200).json({
            mensaje: ' se eliminó el producto'
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: 'error al eliminar el producto'
        })
    }
}  

module.exports={
    crearProducto,
    editarProducto,
    eliminarProducto, 
    obtenerUnProducto,
    obtenerTodosProductos
}