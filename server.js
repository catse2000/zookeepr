const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true}));

// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// used to reference where other assets (like CSS and Javascript) are when calling a page through the server
app.use(express.static('public'));

const { animals } = require('./data/animals');

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});