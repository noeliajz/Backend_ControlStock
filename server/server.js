const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT || 8080
        this.middlewares()
        this.routes()
    }
    middlewares(){
        this.app.use(express.json())
        this.app.use(morgan('dev'))
        this.app.use(express.static('public'))
        this.app.use(cors());
    }


    routes(){
        this.app.use('/apiStock/usuario', require('../routes/usuario'))
        this.app.use('/apiStock/producto', require('../routes/producto'))
        this.app.use('/apiStock/carrito', require('../routes/carrito'))
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log('servidor en linea', this.port)
        })
    }
}
module.exports = Server