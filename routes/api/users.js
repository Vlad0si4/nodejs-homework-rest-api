const express = require("express");

const ctrl = require("../../controllers/users");

const { validateBody } = require("../../decorators");
const { authenticate } = require("../../middlewares");

const schemas = require("../../schemas/users");

const router = express.Router();

const registerValidate = validateBody(schemas.userSignUpSchema);
const loginValidate = validateBody(schemas.userSignInSchema);

router.post("/register", registerValidate, ctrl.register);
router.post("/login", loginValidate, ctrl.login);
router.get("/current", authenticate, ctrl.getCurrent);
router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
