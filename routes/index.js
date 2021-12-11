const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;  
const fs = require('fs');  
const { User } = require('../models/userModel');
const bodyParser = require('body-parser');
const { Song } = require('../models/songModel');
const { getUser, register, login, confirmOtp, resetPassword, changePassword } = require('../controllers/userController');
const { getSong, getSongByKeyWord, getSongByArtist, getSongByGenres, getSongByName } = require('../controllers/songController');
const { getArtist } = require('../controllers/artistController');
const { getGenres } = require('../controllers/genresController');
const { getPlaylist } = require('../controllers/playlistController');

router.use(bodyParser.json());


router.get('/api/getSong', getSong);
router.post('/api/getSongByKeyWord', getSongByKeyWord);
router.post('/api/getSongByName', getSongByName);
router.post('/api/getSongByArtist', getSongByArtist);
router.post('/api/getSongByGenres', getSongByGenres);
router.get('/api/getArtist', getArtist);
router.get('/api/getGenres', getGenres);
router.get('/api/getPlaylist', getPlaylist);

router.get('/api/user', getUser);
router.post('/api/user/register', register);
router.post('/api/user/login', login);
router.post('/api/user/changePassword', changePassword);
router.post('/api/user/confirmOtp', confirmOtp);
router.post('/api/user/resetPassword', resetPassword);

router.get('/open_songImage', (req, res, next) => {
    let imgName = "uploadsImg/song/" + req.query.imgName;
    fs.readFile(imgName, (err, imageData) => {
        if (err) {
            res.json({
                result: "failed",
                message: `Cannot read image. Err is : ${err}`
            });
        }
        res.writeHead(200, {'Content-Type' : 'image/jpeg'});
        res.end(imageData);
    });
});

router.get('/open_genresImage', (req, res, next) => {
    let imgName = "uploadsImg/genres/" + req.query.imgName;
    fs.readFile(imgName, (err, imageData) => {
        if (err) {
            res.json({
                result: "failed",
                message: `Cannot read image. Err is : ${err}`
            });
        }
        res.writeHead(200, {'Content-Type' : 'image/jpeg'});
        res.end(imageData);
    });
});

router.get('/open_artistImage', (req, res, next) => {
    let imgName = "uploadsImg/artist/" + req.query.imgName;
    fs.readFile(imgName, (err, imageData) => {
        if (err) {
            res.json({
                result: "failed",
                message: `Cannot read image. Err is : ${err}`
            });
        }
        res.writeHead(200, {'Content-Type' : 'image/jpeg'});
        res.end(imageData);
    });
});

router.get('/open_mp3', (req, res, next) => {
    let imgName = "uploadsMp3/" + req.query.imgName;
    fs.readFile(imgName, (err, imageData) => {
        if (err) {
            res.json({
                result: "failed",
                message: `Cannot read image. Err is : ${err}`
            });
        }
        res.writeHead(200, {'Content-Type' : 'mp3/m4a'});
        res.end(imageData);
    });
});

router.get('/open_playlistImage', (req, res, next) => {
    let imgName = "uploadsImg/playlist/" + req.query.imgName;
    fs.readFile(imgName, (err, imageData) => {
        if (err) {
            res.json({
                result: "failed",
                message: `Cannot read image. Err is : ${err}`
            });
        }
        res.writeHead(200, {'Content-Type' : 'image/jpeg'});
        res.end(imageData);
    });
});

// Get Single Employee (2nd Way)

// router.get('/api/employee/:id', (req, res) => {
//     if(!ObjectId.isValid(req.params.id))
//     return res.status(400).send(`No record With Given ID : ${req.params.id}`);

//     Employee.findById(req.params.id, (err, data) => {
//         if(!err) {
//             res.send(data);
//         } else {
//            console.log(err);
//         }
//     });
// });


// Save Employee
// router.post('/api/user/add', (req, res) => {
//     const emp = new User({
//         name: req.body.name,
//         email: req.body.email,
//         salary: req.body.salary
//     });
//     emp.save((err, data) => {
//         if(!err) {
//             // res.send(data);
//             res.status(200).json({code: 200, message: 'User Added Successfully', addEmployee: data})
//         } else {
//            console.log(err);
//         }
//     });
// });



// Update Employee

// router.put('/api/employee/update/:id', (req, res) => {


//     const emp = {
//         name: req.body.name,
//         position: req.body.position,
//         office: req.body.office,
//         salary: req.body.salary
//     };
//     Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, data) => {
//         if(!err) {
//             res.status(200).json({code: 200, message: 'Employee Updated Successfully', updateEmployee: data})
//         } else {
//             console.log(err);
//         }
//     });
// });





// Delete Employee
// router.delete('/api/employee/:id', (req, res) => {

//     Employee.findByIdAndRemove(req.params.id, (err, data) => {
//         if(!err) {
//             // res.send(data);
//             res.status(200).json({code: 200, message: 'Employee deleted', deleteEmployee: data})
//         } else {
//             console.log(err);
//         }
//     });
// });


module.exports = router;