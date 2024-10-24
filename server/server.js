const express = require('express')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT || 8080
        this.routes()
    }
    routes(){
        this.app.use('/apiStock', require('../routes/usuario'))
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log('servidor en linea', this.port)
        })
    }
}
module.exports = Server