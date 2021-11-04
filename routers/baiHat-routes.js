const express = require('express');
const {addBaiHat} = require('../controllers/baiHatController');

const router = express.Router();

router.post('/baiHat', addStudent);

module.exports = {
    router: router
}