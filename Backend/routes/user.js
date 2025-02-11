const express = require('express');

const Router = express.Router();

const userController = require('../controllers/user');

Router.post('/signup',userController.signup);
Router.post('/login',userController.login);

module.exports = Router;