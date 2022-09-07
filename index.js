const express=require("express");
const dotenv=require("dotenv");
const connectDb = require("./config/connectDB")
const userRoute =require("./routes/userRoutes")
const morgan = require("morgan")

dotenv.config();
const app = express();
connectDb();

//middlewares
app.use(express.json())
app.use(morgan("dev"))
app.use("/users", userRoute)

app.get("/", (req, res) => {
    res.send("welcome to our school portal")
})


const PORT = process.env.PORT || 6000

app.listen(PORT,() =>
     console.log(`server is running on ${PORT}`))