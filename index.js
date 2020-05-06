const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const { mungeLocation, mungeWeather } = require('./utils.js');
const locationData = require('./data/geo.json');
const weatherData = require('./data/weather.json');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());


app.get('/location', (req, res) => {
    const mungedData = mungeLocation(locationData);

    res.json(mungedData);
});

app.get('/weather', (req, res) => {
    const mungedData = mungeWeather(weatherData);

    res.json(mungedData);
});


app.listen(PORT, () => console.log(`running on port ${PORT}`));