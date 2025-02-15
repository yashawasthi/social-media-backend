import express from "express";
import dotenv from "dotenv"

dotenv.config({ path: "./config.env" });

const app= express();

app.get("/",(req,res)=>{
    res.json("App working fine");
});

let PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`App is running at port ${PORT}`)
})