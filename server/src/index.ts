import express from 'express';
import cors from 'cors';
const app = express();


app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// const mysql = require('mysql');

const hostname = '127.0.0.1';
const port = 5000;

interface BodyRequest {
    jmeno: string;
    prijmeni: string;
    email: string;
    delkaPobytu: number;
}

app.post('/registrace', (req, res) => {
    const { jmeno, prijmeni, email, delkaPobytu } = req.body as BodyRequest;

    //save to database
    // const connection = mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     password: '',
    //     database: 'hotel'
    // });
    // connection.connect();
    // connection.query(`INSERT INTO pobyt (delkaPobytu) VALUES ('${delkaPobytu}')`, (err, rows, fields) => {
    //     if (err) {
    //         console.log(err);
    //         res.status(500).send(err);
    //     } else {
    //         res.status(200).send(rows);
    //     }
    // });
    
    res.send({
        delkaPobytu: delkaPobytu,
        celeJmeno: `${jmeno} ${prijmeni.toUpperCase()}: ${email}`,
        status: 'ok',
        cislo: Math.random(),
    });
});


app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
