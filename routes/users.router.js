const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const fs = require('fs');  
const { User } = require('../models/userModel');
const bodyParser = require('body-parser');
const { getUser, register, login } = require('../controllers/userController');

router.use(bodyParser.json());

router.get('/api/user', getUser);
router.post('/api/user/register', register);
router.post('/api/user/login', login);

// module.exports =