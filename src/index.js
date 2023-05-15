const express = require("express");
const app = express();
const quotes = require("./quotes.json");
const noteRouters = require("./routes/noteRouters");
const userRouter =require("./routes/userRoutes");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const mongoose = require("mongoose");

app.use(express.json());

app.use(cors());

app.use("/users",userRouter);
app.use("/note",noteRouters);

app.get("/",(req,res)=>{
    res.send("Notes API From Code");
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)

.then(()=>{
    app.listen(PORT,()=>{
        console.log("Server started on port no." + PORT);
    });
})
.catch((error)=>{
    console.log(error);
})

/*
app.get("/random",(req,res)=>{

    let index = Math.floor(Math.random() * quotes.length)
    let quote = quotes[index];
    res.status(200).json(quote);
});
*/

