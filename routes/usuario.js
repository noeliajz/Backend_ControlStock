const {Router} = require('express')
const router = Router()
const { obtenerTodosUsuarios, crearUsuario, editarUsuario, eliminarUsuario, obtenerUnUsuario} = require('../controllers/usuario')
const { check } = require('express-validator')

router.get('/', obtenerTodosUsuarios)
router.get('/:id', obtenerUnUsuario)
router.post('/', [
    check('usuario', 'El campo usuario esta vacio').notEmpty(),
    check('usuario', 'El minimo es de 3 caracteres, máximo 15').isLength({min: 3, max: 15}),
    check('usuario', 'El campo USUARIO debe ser del tipo MAIL').isEmail(),
    check('pass', 'El campo contraseña esta vacio').notEmpty(),
    check('pass', 'El minimo es de 4 caracteres, máximo 15').isLength({min: 4, max: 15}),
    check('repeatPass', 'El campo repetir contraseña esta vacio').notEmpty(),
    check('repeatPass', 'El minimo es de 4 caracteres, máximo 15').isLength({min: 4, max: 15}),
    check('obraSocial', 'El mínimo es de 3 caracteres, máximo 15').isLength({ min:3 , max: 15})
],  crearUsuario)
router.put('/:id', [
    check('usuario', 'El campo usuario esta vacio').notEmpty(),
    check('usuario', 'El minimo es de 3 caracteres, máximo 15').isLength({min: 3, max: 15}),
    check('usuario', 'El campo USUARIO debe ser del tipo MAIL').isEmail(),
    check('pass', 'El campo contraseña esta vacio').notEmpty(),
    check('pass', 'El minimo es de 4 caracteres, máximo 15').isLength({min: 4, max: 15}),
    check('repeatPass', 'El campo repetir contraseña esta vacio').notEmpty(),
    check('repeatPass', 'El minimo es de 4 caracteres, máximo 15').isLength({min: 4, max: 15}),
    check('obraSocial', 'El mínimo es de 3 caracteres, máximo 15').isLength({ min:3 , max: 15})
],  editarUsuario)
router.delete('/:id', eliminarUsuario)


module.exports = router

