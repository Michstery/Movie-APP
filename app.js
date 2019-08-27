var express = require("express");
var app = express();

app.set("view engine", "ejs");

var request = require("request");

app.get("/result", function (req, res) {
    var api = "&apikey=6d1efd15"
    var query = req.query.search
    request("http://www.omdbapi.com/?s=" + query + api, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("result", {
                data: data
            })
        }
    })
})


app.get("/", function (req, res) {
    res.render("search");
})

app.listen(3000, function () {
    console.log("we are on !!!")
})