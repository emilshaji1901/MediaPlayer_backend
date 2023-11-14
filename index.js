//import json server library index.js requre keyword for importing
const jsonServer = require('json-server')


//create server using json- servser
const mediaPlayerServer = jsonServer.create()

//create a  path to db.server
const router = jsonServer.router('db.json')

//middleware toconnect js to json
const middleware =jsonServer.defaults()

//connect
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)



//set up port for server

const port = 7000 || process.env.PORT


//monitor 7000
mediaPlayerServer.listen(port,()=>{
    console.log(`mediaPlayerServer is listening to ${port} and waiting for the request`);
})
