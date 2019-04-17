var express = require("express");
var path = require("path");
// var api = require("./routes/apiRoutes")(app);
// var html = require("./routes/htmlRoutes")(app);
var arr = [];

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Create a set of variables (hint: arrays of objects) for holding the reservation and waitlist data


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname + "/public")));

// app.get("/home.html", (req, res) => {
//     res.sendFile("./public/home.html");
// })

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
