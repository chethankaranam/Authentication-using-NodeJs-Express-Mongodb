const express = require("express");
const app = express();
const dotenv = require("dotenv");
app.use(express.json());
const mongoose = require("mongoose")
dotenv.config();
// connect to db
mongoose.connect(
process.env.DB_CONNECT,
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
},
() => console.log("connected to db")
);
// import routes - LrRJcdpQJWKZ9dcX - j7JAHbLgMKpGGdI8 - K8YAI8W0oITmExin
const authRoutes = require("./routes/auth");
// route middlewares
app.use("/api/user", authRoutes);
app.listen(3000, () => console.log("server is running..."));
