const sequelize = require('./util/database');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

//to parse json bodies
app.use(bodyParser.json());

//to parse url-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }))

//cors - to allow the req from any port
var cors = require('cors');
app.use(cors());

const UserRoutes = require('./routes/user');
app.use('/user',UserRoutes);












sequelize
    .sync()
    .then(() => {
        console.log("all models are synchronised")
    })
    .catch((error) => {
        console.log("error occured in synchronising", error);
    })

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("port is running successfully")
})