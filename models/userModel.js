// class BaiHat {
//     constructor(caSi, hinhBaiHat, idAlbum, idBaiHat, idPlayList, idTheLoai, linkBaiHat, luotThich, tenBaiHat) {
//         this.caSi = caSi, 
//         this.hinhBaiHat = hinhBaiHat, 
//         this.idAlbum= idAlbum, 
//         this.idBaiHat=idBaiHat, 
//         this.idPlayList=idPlayList, 
//         this.idTheLoai=idTheLoai, 
//         this.linkBaiHat=linkBaiHat, 
//         this.luotThich=luotThich, 
//         this.tenBaiHat=luotThich
//     }
// }

let mongoose = require('mongoose');

const User = mongoose.model('User', {
    name: {
        type: String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    salary: {
        type:String,
        required:true
    }

});
module.exports = {User}
