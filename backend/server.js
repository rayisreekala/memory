const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 5000;

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'M1racle@123',
  database: 'db'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
    return;
  }
  console.log('Connected to the database.');
});

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to get data from a table
app.get('/api/login', (req, res) => {
  const query = 'SELECT * FROM users';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error retrieving data');
      return;
    }

    res.json(results);
  });
});

app.post('/insert',(req,res)=>{
  const {email,password}=req.body;
  
  if(!email || !password)
    return res.status(400).json({error:'Name and email are required'});

  const sql="insert into users values(?,?)"
  db.query(sql,[email,password],(err,results)=>{
    if(err){
      console.error('Error inserting data',err);
    return res.status(500).json({error:'An error occured'});
    }
    res.status(201).json({message:'Data inserted successfully',id:results.insertId})
  })

})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
