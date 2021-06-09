const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const postRoute = require('./routes/posts');
const userRoute = require('./routes/user');
const imageRoute = require('./routes/images');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'))

app.use("/posts", postRoute);
app.use("/user", userRoute);
app.use("/images", imageRoute);


module.exports = app;



