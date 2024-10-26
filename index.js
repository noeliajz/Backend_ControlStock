require('dotenv').config()
const connectDB = require('./dataBase/config')
const Server = require('./server/server')
connectDB()
const server = new Server()
server.listen()


