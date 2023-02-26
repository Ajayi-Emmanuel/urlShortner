const express = require("express");
require("dotenv").config();

const app = express();
const PORT = 4000;

app.use(express.urlencoded({extended: true}))

//routes
const shortRoute = require("./routes/short")

app.use(express.json())
app.set('view engine', 'ejs')
app.use('/', shortRoute)


app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});