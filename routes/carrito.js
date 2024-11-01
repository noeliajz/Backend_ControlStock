const {Router} = require('express')
const { agregarProductosAlCarrito, obtenerUnCarritoConProductos, crearCarrito} = require('../controllers/carrito')
const router = Router()

router.get('/:id', obtenerUnCarritoConProductos)
router.post('/:id/:idProducto', agregarProductosAlCarrito)
router.post('/', crearCarrito)

module.exports = router;
