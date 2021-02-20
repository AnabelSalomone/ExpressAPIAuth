const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  // Check if user already exists
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    console.log("ERRORRRRRR ", err);
    res.status(400).send(err);
  }
});

module.exports = router;
