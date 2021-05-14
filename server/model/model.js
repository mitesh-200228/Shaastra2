const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    phone : {
        type: String,
        required: true,
        unique: true
    },
    rphone : {
        type: String,
        required: true,
        unique: true
    },
    gender : String,
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;





// const mongoose = require('mongoose');

// var schema = new mongoose.Schema({
//     name : {
//         type : String,
//         required: true
//     },
//     email : {
//         type: String,
//         required: true
//     },
    
// })

// const Userdb = mongoose.model('userdb', schema);
// // module.exports = Userdb;


// const mongoose = require('mongoose');

// var mitesh = new mongoose.Schema({
//     name : {
//         type : String,
//         required: true
//     }
    
// })

// const Userdb = mitesh.model('userdb', schema);
// module.exports = Userdb;