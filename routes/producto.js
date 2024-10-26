const {Router} = require( 'express')
const { crearProducto, editarProducto, eliminarProducto, obtenerTodosProductos, obtenerUnProducto } = ( '../controllers/controller.Producto')
const { check } = require( 'express-validator')

router.get('/', obtenerTodosProductos)
router.get('/:id', obtenerUnProducto)
router.post('/', crearProducto)
router.put('/:id', editarProducto)
router.delete('/:id', eliminarProducto)

    
module.exports = router