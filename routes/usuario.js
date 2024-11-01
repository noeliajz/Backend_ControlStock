const {Router} = require('express')
const router = Router()
const { obtenerTodosUsuarios, crearUsuario, editarUsuario, eliminarUsuario, obtenerUnUsuario, iniciarSesion} = require('../controllers/usuario')
const { check } = require('express-validator')

router.get('/', obtenerTodosUsuarios)
router.get('/:id', obtenerUnUsuario)
router.post('/', [
    check('nombres', 'El campo nombres esta vacio').notEmpty(),
    check('nombres', 'El minimo es de 3 caracteres, máximo 15').isLength({min: 3, max: 15}),
    check('apellido', 'El campo apellido esta vacio').notEmpty(),
    check('apellido', 'El minimo es de 3 caracteres, máximo 15').isLength({min: 3, max: 15}),
    check('rol', 'El campo rol esta vacio').notEmpty(),
    check('rol', 'El minimo es de 3 caracteres, máximo 15').isLength({min: 3, max: 15}),
    check('email', 'El campo email debe ser del tipo MAIL').isEmail(),
    check('email', 'El campo email esta vacio').notEmpty(),
    check('contrasenia', 'El campo contraseña esta vacio').notEmpty(),
    check('contrasenia', 'El minimo es de 4 caracteres, máximo 15').isLength({min: 4, max: 15}),
    check('pago', 'El campo pago esta vacio').notEmpty(),
],  crearUsuario)
router.put('/:id', [
    check('id', 'El Id no corresponde a un Id de Mongo').isMongoId(),
    check('nombres', 'El campo nombres esta vacio').notEmpty(),
    check('nombres', 'El minimo es de 3 caracteres, máximo 15').isLength({min: 3, max: 15}),
    check('apellido', 'El campo apellido esta vacio').notEmpty(),
    check('apellido', 'El minimo es de 3 caracteres, máximo 15').isLength({min: 3, max: 15}),
    check('rol', 'El campo rol esta vacio').notEmpty(),
    check('rol', 'El minimo es de 3 caracteres, máximo 15').isLength({min: 3, max: 15}),
    check('email', 'El campo email debe ser del tipo MAIL').isEmail(),
    check('email', 'El campo email esta vacio').notEmpty(),
    check('contrasenia', 'El campo contraseña esta vacio').notEmpty(),
    check('contrasenia', 'El minimo es de 4 caracteres, máximo 15').isLength({min: 4, max: 15}),
    check('pago', 'El campo pago esta vacio').notEmpty()
],  editarUsuario)
router.delete('/:id', eliminarUsuario)
router.post('/iniciarSesion', [
    check('usuario', 'El campo USUARIO esta vacío').notEmpty(),
   check('usuario', 'El mínimo es de 3 caracteres').isLength({ min:3 , max: 15}),
   check('usuario', 'El campo USUARIO debe ser del tipo MAIL').isEmail(),
   check('pass', 'El campo contraseña esta vacío').notEmpty(), 
   check('pass', 'El mínimo es de 3 caracteres y máximo 15').isLength({ min:3 , max: 15})
], iniciarSesion)

module.exports = router

