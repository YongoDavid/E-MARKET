// dependencies installed // cors bcrypt express dotenv mysql2 validator morgan  jsonwebtoken uuid ws


const express = require('express') // import express package 
const http = require('http') // too create the server 
const morgan = require('morgan')
require('dotenv').config() // import the dot env file 
const bodyParser = require('body-parser')
const cors = require('cors')
const WebSocket = require('ws')

// HERE IMPORT DIFFERENT ROUTES FOR ACCOUNT / USERS  
const accountRoutes = require('./Routes/accountRoutes')
const userRoutes = require('./Routes/userRoutes')

// The code imports route handlers for accounts and users.

// CREATING SERVER 

const app = express()
const PORT = 3000


// Middlewares 
app.use(morgan('dev'))
app.use(bodyParser.json())  // use to identify the body of the request  

app.use(
    cors({
        // replace this when website is hosted
        // origin: ["http://127.0.0.1:5500", "https://hiit-blog.onrender.com"],
        // credentials: true,
    })
)

// using route handlers 
app.use('/accounts', accountRoutes )
app.use('/user', userRoutes)

// Route handlers are applied to specific paths in the Express app.

const server = http.createServer(app)  // to create out http server and pass our express server into it.
const wss = new WebSocket.Server({server}); // creating WebSocket server 

// creating  a web socket server connecion 
wss.on('connection' ,(ws) => {
    console.log('connection established')

    // handle incoming WebSocket messages
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        ws.send(`${message}`)
    });

    // handle WebSocket disconnection
    ws.on('close', () => {
        console.log(`WebSocket disconnected:`);
    });
});

server.listen(PORT ,() => {
    console.log(`listening on PORT ${PORT}`)
})