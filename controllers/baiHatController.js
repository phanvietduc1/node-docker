'use strict';

const firebase = require('../db');
const BaiHat = require('../models/baiHat');
const firestore = firebase.firestore();

const addBaiHat = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('baiHat').doc().set(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addBaiHat
}