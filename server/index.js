const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "EmpSys"
});


app.listen(3001, () => {
    console.log('Server is Running on port 3001');
})