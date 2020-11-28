// Dependencies
const express = require('express');
const morgan = require('morgan');
const authRoute = require('./routes/authRoute');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const connectDB = require('./config/db')
const { requireAuth, checkUser } = require('./middlewares/authMiddleware');

// Config
require('dotenv').config({
    path:'./config/config.env'
})
const app = express();
const port = process.env.PORT;
connectDB()


// Config for only development
if(process.env.NODE_ENV === "development"){
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))

    app.use(morgan('dev'))
}

// Middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser())

app.set('view engine', 'ejs')

// Routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('index', {title: 'Create your own book list'}));
app.get('/shop', requireAuth, (req, res) => res.send('Shop Here'));
app.use(authRoute);

// App listen
app.listen(port, () => {
    console.log('Server is listening on port', port)
})
