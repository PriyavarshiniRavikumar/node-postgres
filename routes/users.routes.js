const express = require("express");
const router = express.Router();
const { validate } = require("../middlewares/validate.middleware");

const { addUserController } = require("../controllers/users.controller");
const {
    getUsers,
    updateUserController,
    loginController,
    getAccountController,
  } = require("../controllers/users.controller");
const { signUpSchema } = require("../validations/authentication.schema");
const {
    
    updateUserSchema,
    loginSchema,
  } = require("../validations/authentication.schema");
  

router.post("/signup", validate(signUpSchema), addUserController);
//LOGIN
router.post("/login", validate(loginSchema), loginController);

//UPDATE USER DATA
router.put("/user/:id", validate(updateUserSchema), updateUserController);

//VIEW THE USER DATA
router.get("/user/:id", getAccountController);


module.exports = router;
