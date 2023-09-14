const router = require("express").Router();
const UserController = require("./UserController.js");

router.post("/registration", async (req, res) => {
  console.log("registration");
  let { email, firstName, lastName, password } = req.body;
  let registrationData = { email, firstName, lastName, password };

  let registrationResponse = await UserController.userRegistration(
    registrationData
  );
  res.send(registrationResponse);
});

module.exports = router;
