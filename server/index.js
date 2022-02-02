const express = require("express");
const cors = require('cors');
const app = express();

// const mysql = require('mysql');

const hostname = '127.0.0.1';
const port = 5000;

app.post('/registrace', cors(), (req, res) => {
    const delktaPobytu = req.body?.delkaPobytu;

    //save to database
    // const connection = mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     password: '',
    //     database: 'hotel'
    // });
    // connection.connect();
    // connection.query(`INSERT INTO pobyt (delkaPobytu) VALUES ('${delktaPobytu}')`, (err, rows, fields) => {
    //     if (err) {
    //         console.log(err);
    //         res.status(500).send(err);
    //     } else {
    //         res.status(200).send(rows);
    //     }
    // });
    
    res.send({
        delktaPobytu: delktaPobytu,
        status: 'ok',
        cislo: Math.random(),
    });
});


app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
