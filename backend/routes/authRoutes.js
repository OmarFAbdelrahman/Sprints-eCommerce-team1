const express = require("express");
const {login, signup,logOut} = require("../controllers/authController");

const router = express.Router();


router.route("/login").post(login);
router.route("/signup").post(signup);
router.route('/logout').get(logOut);

module.exports = router;
