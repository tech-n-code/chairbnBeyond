const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3003;
const { Client } = require("pg");
const db = new Client({ connectionString: process.env.DATABASE });
db.connect();
const cors = require("cors");

//Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get("/api/gallery", (req, res) => {
    db.query("SELECT * FROM gallery", (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error retrieving gallery");
        } else {
            res.send(result.rows);
        }
    });
});


app.listen(PORT, () => console.log(`app listening on port: ${PORT}`));