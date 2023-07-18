const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');


const app = express();
const port = 3002;

const connection = mysql.createConnection({
    host: "ecomm.cbc5q7w4rrlk.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "password",
    database: "Ecomv2"
});

connection.connect((err) => {
    if (err) {
        console.log(err);
        return err;
    } else {
        console.log("Connected successfully!")
    }
});

app.get("/api/watches", (req, res) => {
    connection.query("SELECT * FROM watches", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})