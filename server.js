const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

//controller imports
const peopleController = require('./controllers/people-controller')
require('dotenv').config()
require('./config/db.connection')

const {PORT} = process.env

//express/ app middleware
app.use(express.json())
//cors helper function
app.use(cors());
app.use(morgan("dev"));
//morgan request logger(for dev)

//router middleware
app.use('/people', peopleController)

//root - home /index route for api - redirects to the people index
app.get('/', (req,res)=> res.redirect('/people'))



app.listen(PORT, () => console.log('Listening on port: ${PORT}'))