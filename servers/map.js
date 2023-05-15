const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3004;
const { Pool } = require("pg");
const pool = new Pool({ connectionString: process.env.DATABASE });

pool.connect();

//Middleware
app.use(bodyParser.json());
app.use(express.json());

//Routes

app.get("/api/location", (req, res) => {
    pool.query("SELECT location FROM listings", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error retrieving location from database");
    }
    res.json(result.rows[0]);
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
