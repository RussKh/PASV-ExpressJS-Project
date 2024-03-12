const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("test");
});

app.get("/cards", (req, res) => {
  res.send([
    { id: 1, name: "First Card", status: "todo", prioroty: 1 },
    { id: 2, name: "Second Card", status: "progress", prioroty: 5 },
  ]);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
