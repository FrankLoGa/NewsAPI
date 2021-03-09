const path = require('path');
const multer = require('multer');
const user = require('UserModule');


const multStorage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null, path.join(__dirname,'..','..','public','images'));
    },
    filename: (req, file, cb) =>{
        console.log('File:',file);
        cb(null, file.originalname);
    }
});


const fFilters = (req, file, cb) =>{
    const flag = file.mimetype.startsWith('image');
    cb(null, flag);
}


const uploadFile = multer({
    storage : multStorage,
    fFilters: fFilters
});


exports.getUser = (req, res)=>{
    user.find({}, (err, result)=>{
        console.log(result);
        res.send(result);
    });
}

exports.renderUserCreation = (req, res)=>{
    res.render("CreateUser");
}

exports.uploadImage = uploadFile.single('profilePic');

exports.createUser = (req, res)=>{
    let newUser = {};
    if(req.file){
        newUser = req.body;
        newUser.profilePic = path.join(__dirname, '..', '..', 'public', 'images', req.file.filename);
        console.log(newUser);
        user.insert(newUser);
        res.end('New User Created');
    }else{
        res.end('File error')
    }
}