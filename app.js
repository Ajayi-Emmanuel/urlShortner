const express = require("express");
require("dotenv").config();

const app = express();
const PORT = 4000;

app.use(express.json())

app.post("/", (req, res) => {
  const body = req.body;

  res.json({
    body
  }).status(200);

  
}); 

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});