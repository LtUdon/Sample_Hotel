const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const { Pool } = require('pg');

const port = 3000;

app.get('/test', (req,res) => {
    try {
        res.render('test');
    }catch (error) {
        console.error('Error rendering test page:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = app;