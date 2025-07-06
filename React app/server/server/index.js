const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'datingapp',
});

app.post('/signup', (req, res) => {
  const { fullName, username, email, password, confirmPassword } = req.body;
  
  // Perform validation and further processing of the input data before saving it to the database
  // Ensure that the passwords match and other required fields are provided

  if (password !== confirmPassword) {
    return res.status(400).send('Passwords do not match');
  }

  // Hash the password using bcrypt
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }

    const sql = `INSERT INTO user (fullName, username, email, password) VALUES (?, ?, ?, ?)`;
    db.query(sql, [fullName, username, email, hashedPassword], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }
      res.status(200).send('User registered successfully');
    });
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.query("SELECT * FROM user WHERE username = ?", username, (err, result) => {
    if (err) {
      // console.error(err);
      return res.status(500).send('Internal Server Error');
    }
    if (result.length === 0) {
      console.error("Invalid username or password");
      return res.status(401).send('Invalid username or password');
    }

    const hashedPassword = result[0].password;
    bcrypt.compare(password, hashedPassword, (err, isMatch) => {
      if (err) {
        // console.error(err);
        return res.status(500).send('Internal Server Error');
      }
      if (isMatch) {
        return res.status(200).send('Authentication successful');
      } else {
      console.error("Invalid username or password");
        return res.status(401).send('Invalid username or password');
      }
    });
  });
});

app.listen(5000, () => {
  console.log('Servner running on port 5000');
});
