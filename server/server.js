const express = require('express')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT || 8080
        this.middlewares()
        this.routes()
    }
    middlewares(){
        this.app.use(express.json())
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