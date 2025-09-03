const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const { Pool } = require('pg');

const port = 3000;
const address = 'localhost';

const app = express();
exports.app = app;

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 360000 // 1 hour
    }
}));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req,res) {
    try {
        res.render('index');
    }catch (error) {
        console.error('Error rendering test page:', error);
        res.status(500).send('Internal Server Error');
    }
});

const serv = app.listen(port, address, () => {
    const addr = serv.address();
    if (addr && typeof addr === 'object'){
        console.log(`Server listening at http://${address}:${port}`);
    }else{
        console.log(`Server listening on port ${port}`);
    }
});

module.exports = app;