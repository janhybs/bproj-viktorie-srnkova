"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use((0, cors_1.default)());
// const mysql = require('mysql');
const hostname = '127.0.0.1';
const port = 5000;
app.post('/registrace', (req, res) => {
    const { jmeno, prijmeni, email, delkaPobytu } = req.body;
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
//# sourceMappingURL=index.js.map