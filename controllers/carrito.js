const Producto= require( "../models/producto")
const Carrito = require("../models/carrito")

const obtenerUnCarritoConProductos = async (req, res) => {
    try {
        const getCart = await Carrito.findOne({_id: req.params.id})
        res.status(200).json({msg: 'Carrito encontrado', getCart})
    } catch (error) {
        console.log(error)
    }
}

const agregarProductosAlCarrito = async (req, res) => {
    try {
      console.log(req.params.idCart)
       const obtenerCarrito = await Carrito.findOne({_id: req.params.id}) 
       const obtenerProducto = await Producto.findOne({_id: req.params.idProducto})
       console.log(obtenerCarrito)

      const prodExiste = obtenerCarrito.productos.filter((prod) => prod._id == req.params.idProd)
      if(prodExiste.length > 0){
        return res.status(400).json({msg: 'Producto duplicado en su carrito', status: 400})
      }

       obtenerCarrito.productos.push(obtenerProducto) 
       await obtenerCarrito.save()                             
       res.status(200).json({msg: 'El producto se cargo en el carrito correctamente', obtenerCarrito})
      } catch (error) {
      console.log(error)
    }
  }

  const crearCarrito = async (req, res) => {
    try {
        const nuevoCarrito = new Carrito(req.body)
        await nuevoCarrito.save()
        res.status(200).json({msg: 'Carrito creado', nuevoCarrito})
    } catch (error) {
        console.log(error)
    }
  }





module.exports={
    crearCarrito,
    agregarProductosAlCarrito,
    obtenerUnCarritoConProductos
}