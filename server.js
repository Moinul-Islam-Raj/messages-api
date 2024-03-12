const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const messageRouter = require('./routes/message.route.js')
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));

//routes
app.use('/api/messages', messageRouter);


//connect and start server
mongoose.connect(process.env.CONNECTION_STRING)
.then(() => {
    console.log("Succesfully connected to mongoDB!");
    app.listen(6969, () => {
        console.log("Server is running at port 6969");
    })
})
.catch((e) => {
    throw new Error("Failed to connect to mongoDB!!!");
})