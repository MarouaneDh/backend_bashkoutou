const router = require("express").Router();

const isAuth = require("../middlewares/isAuth");
const {
    validator,
    loginRules,
    registerRules,
} = require("../middlewares/bodyValidator");

const { register, login } = require("../controllers/user.controller");

//User registration
router.post("/register", registerRules(), validator, register)

//User login
router.post("/login", loginRules(), validator, login)

//token test api
router.get("/me", isAuth, (req, res) => {
    res.status(200).send({ user: req.user });
});

module.exports = router;