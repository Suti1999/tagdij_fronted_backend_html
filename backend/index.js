const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tagdij'
});

database.connect((err) => {
    if (err) throw err;
    console.log('Csatlakozva az adatbázishoz!');
});

app.get('/getdata', (req, res) => {
    database.query('SELECT * FROM your_table', (error, results, fields) => {
        if (error) throw error;

        // Process the data and send it to the frontend
        res.json(results);
    });
});



app.listen(3000, () => {
    console.log('Sikeresen fut a szerver!');
});

