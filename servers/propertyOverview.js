const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3011;
const { Pool } = require("pg");
const db = new Pool({ connectionString: process.env.DATABASE });
db.connect();
const cors = require("cors");

pool.connect();

//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//routes

app.get("/api/overview", (req, res) => {
    const listingId = req.params.id;
    db.query(
      "SELECT * FROM overview",
      [listingId],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error retrieving gallery");
        } else {
          const photoUrls = result.rows.map((row) => row.photo_url);
          res.send(photoUrls);
        }
      }
    );
  });

app.get("/api/overview//:id", (req, res) => {
    const listingId = req.params.id;
    db.query(
      "SELECT photo_url FROM listing_photos WHERE listingid = $1",
      [listingId],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error retrieving gallery");
        } else {
          const photoUrls = result.rows.map((row) => row.photo_url);
          res.send(photoUrls);
        }
      }
    );
  });


app.listen(PORT, () => console.log(`property overview server listening on port: ${PORT}`));