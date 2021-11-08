const { User } = require('../models/userModel');

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const apiResponse = require("../helpers/apiResponse");

const getUser = async (req, res, next) => {
    User.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
}

/**
 * User registration.
 *
 * @param {string}      name
 * @param {string}      email
 * @param {string}      password
 *
 * @returns {Object}
 */
const register = async (req, res, next) => {
    bcrypt.hash(req.body.password,10,function(err, hash) {
        const emp = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash
        });
        emp.save((err, data) => {
            if(!err) {
                // res.send(data);
                res.status(200).json({code: 200, message: 'User Added Successfully', addUser: data})
            } else {
            console.log(err);
            }
        });
    });
}

/**
 * User login.
 *
 * @param {string}      email
 * @param {string}      password
 *
 * @returns {Object}
 */
const login = async (req, res, next) => {
    try {
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return apiResponse.validationErrorWithData(res, "Validation Error.", errors.array());
        // }else {
            console.log(req.body.email);
            console.log(req.body.password);

            User.findOne({email : req.body.email}).then(user => {
                if (user) {
                    //Compare given password with db's hash.
                    bcrypt.compare(req.body.password,user.password,function (err,same) {
                        if(same){
                            //Check account confirmation.
                            // if(user.isConfirmed){
                                // Check User's account active or not.
                                // if(user.status) {
                                    let userData = {
                                        _id: user._id,
                                        name: user.name,
                                        email: user.email,
                                    };
                                    //Prepare JWT token for authentication
                                    const jwtPayload = userData;
                                    const jwtData = {
                                        expiresIn: "2 hours",
                                    };
                                    const secret = "myscret";
                                    console.log(secret);
                                    //Generated JWT token with Payload and secret.
                                    userData.token = jwt.sign(jwtPayload, secret, jwtData);
                                    // return apiResponse.successResponseWithData(userData);
                                    return res.status(200).json(userData);
                                // }else {
                                //     return apiResponse.unauthorizedResponse(res, "Account is not active. Please contact admin.");
                                // }
                            // }else{
                            //     return apiResponse.unauthorizedResponse(res, "Account is not confirmed. Please confirm your account.");
                            // }
                        }else{
                            return apiResponse.unauthorizedResponse(res, "Email or Password wrong.");
                        }
                    });
                }else{
                    return apiResponse.unauthorizedResponse(res, "Email or Password wrong.");
                }
            });
        // }
    } catch (err) {
        return apiResponse.ErrorResponse(res, err);
    }
}

module.exports = {
    getUser,
    register,
    login
}