const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
// Import routes
const authRoute = require("./routes/auth");

// Connect to DB
mongoose.connect(
  process.env.DB_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected!")
);

// Middleware
app.use(express.json())
// Route Middleware
app.use("/api/user", authRoute);

app.listen(3000, () => console.log("Listening on port 3000"));
