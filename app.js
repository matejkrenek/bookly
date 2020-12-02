// Dependencies
const express = require('express');
const morgan = require('morgan');
const authRoute = require('./routes/authRoute');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db')

// Config
require('dotenv').config({
    path:'./config/config.env'
})
const app = express();
const port = process.env.PORT || 5000;
connectDB()


// Config for only development
if(process.env.NODE_ENV === "development"){
    app.use(morgan('dev'))
}

// Middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser())

app.set('view engine', 'ejs')

// Routes
app.get('/', (req, res) => res.json({'message': 'main page here'}));
app.use(authRoute);

// App listen
app.listen(port, () => {
    console.log('Server is listening on port', port)
})
