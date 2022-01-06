const express = require("express");
const router = express.Router();

//importation du middleware / email
const validEmail = require("../middleware/email");

// importation middleware / password
const password = require("../middleware/password");

// importation controllers / user
const userCtrl = require("../controllers/user");

router.post("/signup", password, validEmail, userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;
