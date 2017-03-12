//************************ */
//html-routes.js would be route the user to the requested links//

//************************ */

//Dependencies
//================================//
var path = require("path");

//routes
//=================================//
module.exports = function(app){
    app.get ("/index", function(req, res){
        res.sendFile(path.join(__dirname+"/../public/index.html"));
    });

    //saved route loads saved.html//
    app.get("/saved", function(req, res){
        res.sendFile(path.join(__dirname+"/../public/saved.html"));
    });
};