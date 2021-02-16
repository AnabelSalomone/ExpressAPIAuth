const router = require("express").Router();
const User = require("../model/User");

router.post("/register", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    console.log("USER " + user);
    const savedUser = await user.save();
    console.log("SAVED " + savedUser);
    res.send(savedUser);
    console.log("FINISHED")
  } catch (err) {
      console.log("ERRORRRRRR ", err)
    res.status(400).send(err);
  }
});

module.exports = router;
