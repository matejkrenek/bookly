// Dependencies
const express = require('express');
const morgan = require('morgan');
const authRoute = require('./routes/authRoute');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'))

// View Engine
app.set('view engine', 'ejs');

// Mongo connection
const dbURI = 'mongodb+srv://matejkrenek:192003mates@expressapp.q3vmc.mongodb.net/bookly?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(result => app.listen(port))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.render('index'))
app.use(authRoute)
