const cardCreate = require("./card/cardCreate");
const cardDelete = require("./card/cardDelete");
const cardGetAll = require("./card/cardGetAll");
const cardUpdate = require("./card/cardUpdate");

// let cards = [
//   { id: 1, name: "First Card", status: "todo", prioroty: 1 },
//   { id: 2, name: "Second Card", status: "progress", prioroty: 5 },
// ];

function routes(app) {
  app.get("/", (req, res) => {
    res.send("test");
  });

  app.get("/card", cardGetAll);

  app.delete("/card/:cardId", cardDelete);
  app.post("/card", cardCreate);

  app.patch("/card/:cardId", cardUpdate);
}

module.exports = routes;
