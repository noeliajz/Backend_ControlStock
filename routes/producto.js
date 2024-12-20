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
router.post('/', [
    check('nombre')
    .notEmpty()
    .withMessage('el campo nombre esta vacio')
    .isLength({min:3 , max: 35 })
    .withMessage(' el campo nombre debe tener entre 3 y 35 caracteres máximo'),
    check('precio')
    .notEmpty()
    .withMessage('el campo precio esta vacío')
    .isNumeric()
    .withMessage('el campo precio debe ser del tipo numerico')
    .custom((value) => {
        if(value >= 1 && value <=1000000000){
            return true
        } else{
            throw new Error('el precio debe estar entre 1 y 1000000000')
        }
    }),
    check('descripcion')
    .notEmpty()
    .withMessage('el campo descripción esta vacio')
    .isLength({min: 3, max:30})
    .withMessage('el descripcion  debe tener como minimo 3 y maximo 30 caracteres'),
    check('fecha')
    .notEmpty()
    .withMessage('el campo fecha esta vacio')
    .isDate()
    .withMessage(' debe ser del tipo fecha ')
], crearProducto);
router.put('/:id', [
    check('nombre')
    .notEmpty()
    .withMessage('el campo nombre esta vacio')
    .isLength({min:3 , max: 35 })
    .withMessage(' el campo nombre debe tener entre 3 y 35 caracteres máximo'),
    check('precio')
    .notEmpty()
    .withMessage('el campo precio esta vacío')
    .isNumeric()
    .withMessage('el campo precio debe ser del tipo numerico')
    .custom((value) => {
        if(value >= 1 && value <=1000000000){
            return true
        } else{
            throw new Error('el precio debe estar entre 1 y 1000000000')
        }
    }),
    check('descripcion')
    .notEmpty()
    .withMessage('el campo descripción esta vacio')
    .isLength({min: 3, max:30})
    .withMessage('el descripcion  debe tener como minimo 3 y maximo 30 caracteres'),
    check('fecha')
    .notEmpty()
    .withMessage('el campo fecha esta vacio')
    .isDate()
    .withMessage(' debe ser del tipo fecha ')
], editarProducto);
router.delete('/:id', eliminarProducto);

module.exports = router;
