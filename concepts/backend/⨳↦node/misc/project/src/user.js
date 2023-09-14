const router = require("express").Router();
const userController = require("./userController");

router.get("/", async (req, res) => {
  const id = req.body.id;
  const user = await userController.getUser(id);
  res.send(user);
});

module.exports = router;
