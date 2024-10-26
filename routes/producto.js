const { Router } = require('express');
const { 
  crearProducto, 
  editarProducto, 
  eliminarProducto, 
  obtenerTodosProductos, 
  obtenerUnProducto 
} = require('../controllers/producto');
const { check } = require('express-validator');

const router = Router();

router.get('/', obtenerTodosProductos);
router.get('/:id', obtenerUnProducto);
router.post('/', crearProducto);
router.put('/:id', editarProducto);
router.delete('/:id', eliminarProducto);

module.exports = router;
