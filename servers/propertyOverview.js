const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3011;
const { Client } = require("pg");
const db = new Client({ connectionString: process.env.DATABASE });
db.connect();
const cors = require("cors");

pool.connect();

//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//routes
app.get("/api/", (req, res) => {
    pool.query("SELECT * FROM ")
})


app.listen(PORT, () => console.log(`property overview server listening on port: ${PORT}`));