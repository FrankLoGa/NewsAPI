const express = require("express");
const router = express.Router();
const userCont = require("../controllers/users");


///rutas

router.get("/", userCont.getUser);
router.get("/create", userCont.renderUserCreation);
router.post("/create", userCont.uploadImage, userCont.createUser);


module.exports = router;