const express = require("express");

const ctrl = require("../../controllers/users");

const { validateBody } = require("../../decorators");
const { authenticate, upload } = require("../../middlewares");

const schemas = require("../../schemas/users");

const router = express.Router();

const registerValidate = validateBody(schemas.userSignUpSchema);
const loginValidate = validateBody(schemas.userSignInSchema);

router.post("/register", registerValidate, ctrl.register);
router.post("/login", loginValidate, ctrl.login);
router.get("/current", authenticate, ctrl.getCurrent);
router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);
module.exports = router;
