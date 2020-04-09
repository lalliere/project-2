// Requiring our models and passport as we've configured it
const db = require("../models");
const { Router } = require("express");

const item = Router();

//Tested
//get all items by name
item.get("/items/", function(req, res) {
  db.Item.findAll({}).then(function(dbitem) {
    res.json(dbitem);
  });
});


//get a specific item by name
item.get("/item/:itemName", function(req, res) {
  db.Item.findOne({
    where: {
      item_name: req.params.itemName
    }
  }).then(function(dbitem) {
    res.json(dbitem);
  });
});

//get a specific item by id
item.get("/item/:id", function(req, res) {
  db.item
    .findAll({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbitem) {
      res.json(dbitem);
    });
});

//Tested
// POST route for saving a new item
item.post("/item/addNew", function(req, res) {
  console.log(req.body);
  db.Item.create({
    item_name: req.body.itemName,
    cost: parseInt(req.body.itemPrice)
  }).then(function(dbPost) {
    res.json(dbPost);
  });
});


//Tested
//PUT route for updating an item
item.put("/item/update/:id", function(req, res) {
  db.Item.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.json("Price has been updated");
  });
});

//tested
// DELETE route for deleting item
item.delete("/item/:id", function(req, res) {
  console.log("hello");
  db.Item.destroy({
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.json("Item deleted successfully.");
  });
});

module.exports = item;
