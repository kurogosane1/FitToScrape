// // Requiring our Note and Article models
// var Note = require("../models/note.js");
// var Article = require("../models/article.js");
// var request = require("request");
// var cheerio = require("cheerio");
// var bodyParser = require("body-parser");

// module.exports = {
//     scrape: function (req, res) {
//         // this is to grab the data 
//         request("http://www.washingtontimes.com/", function (err, response, html) {
//             var $ = cheerio.load(html);


//             $(".media-heading").each(function (i, element) {
//                 var title = $(this).children("a").text();
//                 //save the href value of each link enclosed in the current element//
//                 var link = $(this).children("a").attr("href");
//                 if (title && link) {
//                     //save the data //
//                     db.scrapTest2.save({
//                             title: title,
//                             link: link
//                         },
//                         function (error, saved) {
//                             //if there's an error during this query
//                             if (error) {
//                                 console.log(error);
//                             } else {
//                                 console.log(saved);
//                             }
//                         })
//                 }
//             });


//         });
//         // Tell the browser that we finished scraping the text
//         res.send("Scrape Complete");
//     },

//     getArticles: function (req, res) {
//         Article.find({}, function (error, doc) {
//             // Log any errors
//             if (error) {
//                 console.log(error);
//             }
//             // Or send the doc to the browser as a json object
//             else {
//                 res.json(doc);
//             }
//         });
//     }
// };