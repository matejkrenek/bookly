// Dependencies
const express = require('express');
const morgan = require('morgan');
const authRoute = require('./routes/authRoute');
const bookRoute = require('./routes/bookRoute');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middlewares/authMiddleware');

require('dotenv').config();

const app = express();
const port = 3000;


// Middlewaresff
app.use(express.static('public'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cookieParser())
app.use(morgan('dev'))

// View Engine
app.set('view engine', 'ejs');

// Mongo connection
const dbURI = process.env.DATABASE_URL;
mongoose.connect(dbURI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(result => app.listen(port))
    .catch(err => console.log(err))

app.get('*', checkUser);
app.get('/', (req, res) => res.render('index', {title: 'Create your own book list'}));
app.use(bookRoute);
app.use(authRoute);

// 404 error
app.use((req, res) => {
    res.status(404).render('404', { title: '404 Not Found' });
})
