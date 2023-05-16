const express = require("express");
const app = express();
const PORT = process.env.PORT || 3005;
const dotenv = require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE,
});

app.use(express.json());
app.use(express.static("client"));

app.get("/api/reviews", (req, res) => {
  pool.query("SELECT * FROM reviews", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error querying the database");
    } else {
      res.send(result.rows);
    }
  });
});

app.get("/api/reviews/:id", (req, res) => {
    const taskId = req.params.id;
    pool.query(
      "SELECT * FROM reviews WHERE id = $1",
      [taskId],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal server error");
        } else {
          res.send(result.rows);
        }
      }
    );
  });

app.listen(PORT, () => {
  console.log("Server is listening on port 3005...");
});
