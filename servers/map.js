const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3003;
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
    res.send(result.rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
