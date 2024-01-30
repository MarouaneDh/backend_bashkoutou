const express = require('express')
const dbConnect = require("./config/connectDB");
require("dotenv").config();

const authRouter = require("./routes/auth");
const contractsRouter = require("./routes/contracts");

const PORT = process.env.PORT || 6000

// connect DB
dbConnect();

const app = express()

app.listen(PORT, () => {
    console.log(`listenning on PORT: ${PORT}`)
})

//body parse midware
app.use(express.json());
app.use("/api/contract", contractsRouter);
app.use("/api/auth", authRouter);
