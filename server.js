//setting up express
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

//setting up the bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//setting up the paths for the assets files
app.use(express.static(path.join(__dirname, "/public/")));

//setting up the routes from the controllers.js
require("./controllers/controllers.js")(app);

//connecting with handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//syncing with mongojs
var mongoose = require("mongoose");
mongoose.Promise = Promise;
//***************depending if you are doing a local host or heroku this depends on the switch
// mongoose.connect("mongodb://localhost/mongoScrapeHW");
mongoose.connect("mongodb://<dbuser>:<dbpassword>@ds129010.mlab.com:29010/heroku_rz33cvxh");
//***************************************************************************************************
var db = mongoose.connection;
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

//setting up the PORT
app.listen(PORT);





// // Dependencies
// var express = require("express");
// var bodyParser = require("body-parser");
// var logger = require("morgan");
// var mongoose = require("mongoose");
// // Requiring our Note and Article models
// var Note = require("./models/note.js");
// var Article = require("./models/article.js");
// // var path = require("path");
// // Our scraping tools
// var request = require("request");
// var cheerio = require("cheerio");
// // Set mongoose to leverage built in JavaScript ES6 Promises
// mongoose.Promise = Promise;


// // Initialize Express
// var app = express();

// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(bodyParser.text());
// // app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// // app.use(express.static(path.join(__dirname, "/public/")));


// // Use morgan and body parser with our app
// app.use(logger("dev"));
// app.use(bodyParser.urlencoded({
//   extended: false
// }));

// // require("./controllers/index.js")(app);
// // require("./controllers/noteCreate.js")(app);
// // global.db = require('./models');

// // Make public a static dir
// app.use(express.static("public"));

// // Database configuration with mongoose
// mongoose.connect("mongodb://localhost/scrapTest2");
// var db = mongoose.connection;

// // Show any mongoose errors
// db.on("error", function(error) {
//   console.log("Mongoose Error: ", error);
// });

// // Once logged in to the db through mongoose, log a success message
// db.once("open", function() {
//   console.log("Mongoose connection successful.");
// });


// // Routes =============================================================
// require("./controllers/index.js");
// require("./controllers/noteCreate.js");
// require("./routes/index-routes.js")(app);
// require("./routes/html-routes.js")(app);
// require("./routes/saved-routes.js")(app);



// // Listen on port 3000
// app.listen(3000, function() {
//   console.log("App running on port 3000!");
// });