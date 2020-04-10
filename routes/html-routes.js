// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const { Router } = require("express");
const route = Router();
// Requiring our custom middleware for checking if a user is logged in


// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
route.get("/members", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/members.html"));
});

route.get("/search", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/search.html"));
});

route.get("/addnew", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/addNew.html"));
});

route.get("/upddel", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/upp-del.html"));
});

route.get("/createcustomer", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/create-customer.html"));
});

route.get("/createinvoice", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/create-invoice.html"));
});

route.get("/createsalesorder", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/create-sales-order.html"));
});

route.get("/pdfinvoice", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/pdf-invoice.html"));
});

route.get("/searchinvoice", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/search-invoice.html"));
});

route.get("/statinvoice", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/stat-invoice.html"));
});

route.get("/", function(req, res) {
  // If the user already has an account send them to the members page
  /*if (req.user) {
    res.redirect("/something");
  }*/
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = route;
