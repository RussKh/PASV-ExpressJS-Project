const express = require("express");
const routes = require("./routes");
const bodyParser = require("./bodyParser");
const dbConnection = require("./bdConnection");

const app = express();
const PORT = process.env.PORT || 3000;

dbConnection();

bodyParser(app);
routes(app);
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
