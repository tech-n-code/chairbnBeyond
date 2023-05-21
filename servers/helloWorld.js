const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/api/test", (req, res) => {
  res.json("Hello World!");
});

app.listen(PORT, () => {
  console.log("Hello World server is listening on port 3001...");
});
