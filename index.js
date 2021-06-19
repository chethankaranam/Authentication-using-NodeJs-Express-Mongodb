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
const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const verifyToken = require("./routes/validate-token");
// route middlewares
app.use("/api/user", authRoutes);
app.use("/api/dashboard", verifyToken, dashboardRoutes);
app.listen(3000, () => console.log("server is running..."));
