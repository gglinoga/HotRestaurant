var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Create a set of variables (hint: arrays of objects) for holding the reservation and waitlist data
function Table(name,phoneNumber,email,uniqueId) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.uniqueId = uniqueId;
}
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});