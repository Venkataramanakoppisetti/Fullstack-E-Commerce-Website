const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const sqlite3 = require('sqlite3');
const multer = require("multer");

const app = express();
const PORT = 4000;
app.use(express.json());
app.use(cors());

app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server is running at ${PORT}`);
    }else {
        console.log(`Error : ${error}`)
    }
    
})

app.get("/", (req, res) => {
    res.send("Express App is running successfully");
})