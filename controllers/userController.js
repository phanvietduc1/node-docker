const { User } = require('../models/userModel');

const getUser = async (req, res, next) => {
    User.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
}

const res2 = async (req, res, next) => {
    const emp = new User({
        name: req.body.name,
        phone: req.body.phone,
        password: req.body.password
    });
    emp.save((err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Employee Added Successfully', addEmployee: data})
        } else {
           console.log(err);
        }
    });
}

module.exports = {
    getUser,
    res2
}