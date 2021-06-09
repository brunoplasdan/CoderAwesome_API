const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const postRoute = require('./routes/posts');
const userRoute = require('./routes/user');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/posts", postRoute);
app.use("/user", userRoute);

module.exports = app;



