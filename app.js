const express = require('express');
const mongoose = require('mongoose');
const dotEnv = require('dotenv');

const connectDB = require('./config/db');
const {errorHandler} = require('./middlewares/errors');

//* Load Config
dotEnv.config({path:"./config/config.env"});

//* Database connection
connectDB();

const app = express();

//* BodyPaser
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//* Routes
app.use("/points",require("./routers/pointRouter"));


//* Error Controller
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
));