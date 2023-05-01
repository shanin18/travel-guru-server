const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

const hotels = require("./data/hotels.json")

app.use(cors());

app.get("/", (req, res) =>{
    res.send("travel guru server is running!!!");
})

app.get("/hotels", (req, res)=>{
    res.send(hotels)
})

app.listen(port, ()=>{
    console.log(`travel guru running on port ${port}`)
})