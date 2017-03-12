//This route will handle the scrapping and saving of the the informatin the object holding the link and title//

var articleControl = require("../controllers/index.js");

module.exports = function(app){

    app.get("/scrape", articleControl.scrape);
    app.get("/articles", articleControl.articles);
};