const express = require('express')
const app = express()

// app dependencies
const cors = require('cors')
const morgan = require('morgan')

// controller imports
const monsterController = require('./controllers/monster-controller')
const authController = require('./controllers/auth-controller');

require('dotenv').config()
require('./config/db.connection') // node runs all of the code in db.connection

const { PORT } = process.env  

// express / app middleware
app.use(express.json())

// cors helper function
app.use(cors()) // allows for cross origin request - open channel 
// morgan request logger (for dev)
app.use(morgan('dev'))
// router middleware
app.use('/auth', authController);
app.use('/monster', monsterController)

// root - home / index route for api - redirects to the monster index route 
app.get('/', (req,res)=>res.redirect('/monster'))

app.listen(PORT, ()=>console.log(`Listening on port: ${PORT}`))