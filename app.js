const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const postRoute = require('./routes/posts');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/posts", postRoute);

module.exports = app;



