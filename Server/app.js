// dependencies installed // cors bcrypt express dotenv validator morgan  jsonwebtoken uuid ws
// mysql2 is yet to be installed because i havent done the databse 

const express = require('express') // import express package 
const http = require('http') // too create the server 
const morgan = require('morgan')
require('dotenv').config() // import the dot env file 
const bodyParser = require('body-parser')
const cors = require('cors')
const WebSocket = require('ws')

// HERE IMPORT DIFFERENT ROUTES JUST LIKE THIS 

// const accountsRoutes = require('./routes/accountRoutes')
// const blogRoutes = require('./routes/blogsRoutes')
// const userRoutes = require('./routes/userRoutes')

// CREATING SERVER 

const app = express()
const PORT = 3000


// Middlewares 
app.use(morgan('dev'))
app.use(bodyParser.json())  // use to identify the body of the request  

app.use(
    cors({
        // replace this 
        // origin: ["http://127.0.0.1:5500", "https://hiit-blog.onrender.com"],
        // credentials: true,
    })
)


// replace with the proper routes and use them 
// app.use('/accounts', accountsRoutes)
// app.use('/blogs', blogRoutes)
// app.use('/user', userRoutes)