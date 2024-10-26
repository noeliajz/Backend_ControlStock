const {Router} = require('express')
const router = Router()
const { obtenerTodosUsuarios, crearUsuario, editarUsuario, eliminarUsuario, obtenerUnUsuario} = require('../controllers/usuario')

router.get('/', obtenerTodosUsuarios)
router.get('/:id', obtenerUnUsuario)
router.post('/', crearUsuario)
router.put('/:id', editarUsuario)
router.delete('/:id', eliminarUsuario)


module.exports = router

