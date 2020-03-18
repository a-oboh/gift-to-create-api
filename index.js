const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const port = process.env.PORT || 7200;

const app = express();

mongoose.connect('mongodb://localhost:27017/gift-to-create', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to mongoDB locally');
}).catch((err) => {
    console.log(`error connecting to mongoDB locally - ${err}`);
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.send('<h1>Gift to create API v1.0!</h1>');
});

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));