'use strict';


const express = require('express');

const data = require('./data/weather.json');



const app = express();


const cors = require('cors');
app.use(cors());


app.get('/', (request, response) => {

  response.send('no place like home');

});

app.get('/weather', (request, response) => {

  response.send(data);

});


const PORT = 3001;


app.listen(PORT, () => {
  console.log('Server started: http://localhost:' + PORT);

});


