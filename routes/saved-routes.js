
var articleControl = require('../controllers/noteCreate.js');

module.exports = function(app){

app.get("/articles/:id", articleControl.grabArticle);
app.get("/articles/:id", articleControl.createNote);

} 