// // Requiring our Note and Article models
// var Note = require("../models/note.js");
// var Article = require("../models/article.js");
// var request = require("request");
// var cheerio = require("cheerio");
// var bodyParser = require("body-parser");

// module.exports = {

//     createNote: function(req, res){
//         //create a new note and pass the req.body to the entry//
//         var newNote = new Note(req.body);
//         // and save the new note the db
//         newNote.save(function(error, doc){
//             //log any errors//
//             if (error){
//                 console.log(error);
//             }
//             else {
//                 Article.findOneAndUpdate({"_id": req.params.id}, {"note": doc._id})
//                 //Execute the above query
//                 .exec(function(err, doc){
//                     if (err){
//                         console.log(err);
//                     }
//                     else{
//                         res.send(doc);
//                     }
//                 });
//             }
//         });

//     },
//     grabArticle: function(req, res){
//         Article.findOne({"_id": req.params.id})
//         // ..and populate all of the notes associated with it//
//         .populate("note")
//         //now, execute our query//
//         .exec(function(error, doc){
//             if (error){
//                 console.log(error);
//             }
//             else{
//                 res.json(doc);
//             }
//         });
//     }
// }