const express = require('express')
const srv = express();
const SERVER_PORT = process.env.PORT || 3344
const todoRoute = require('./routes/todos')

srv.use(express.json())
srv.use(express.urlencoded({extended: true}))

srv.get('/hello', function (req, res) {
    res.send("Hello")
})

srv.get('/',(req,res)=>{
    res.sendFile('./public/index.html',
    {root:__dirname})
})

// srv.use('/public', express.static(__dirname + "/public"))
srv.use(express.static('public'))

srv.use('/todos', todoRoute)

srv.listen(SERVER_PORT,()=>{
    console.log("server started at http://localhost:3344")

})