const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json()); // Add this middleware to parse JSON data from the request body

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "EmpSys"
});

// making requests
app.post('/create', (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const position = req.body.position;
  const email = req.body.email;

  db.query(
    'INSERT INTO Emp (name, age, position, email) VALUES (?, ?, ?, ?)',
    [name, age, position, email],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error occurred while inserting values');
      } else {
        res.send('Values inserted');
      }
    }
  );
});


app.get('/emplist' , (req, res) => {
    db.query("SELECT * FROM Emp", 
    (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send('Error occurred while inserting values');
        } else {
          res.send(result);
        }
      }
    )
})

app.listen(3001, () => {
  console.log('Server is Running on port 3001');
});
