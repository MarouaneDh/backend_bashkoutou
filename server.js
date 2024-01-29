const express = require('express')
const dbConnect = require("./config/connectDB");
const PORT = process.env.PORT || 6000

require("dotenv").config();
dbConnect();

const app = express()

app.listen(PORT, () => {
    console.log(`listenning on PORT: ${PORT}`)
})

const authRouter = require("./routes/auth");
// connect DB
//body parse midware
app.use(express.json());
app.use("/api/auth", authRouter);
