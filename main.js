const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("public"));


app.get("/", function(req, res){
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/projects", function(req, res){
  res.sendFile(__dirname + "/public/Projects/projects.html");
});
app.get("/contact", function(req, res){
  res.sendFile(__dirname + "/public/Careers/careers.html");
});
app.get("/media", function(req, res){
  res.sendFile(__dirname + "/public/Media/media.html");
});
app.get("/about", function(req, res){
  res.sendFile(__dirname + "/public/About/about.html");
});
app.get("/residential", function(req, res){
  res.sendFile(__dirname + "/public/Projects/Residential/display.html");
});
app.get("/hospitality", function(req, res){
  res.sendFile(__dirname + "/public/Projects/Hospitality/display.html");
});
app.get("/sports-and-leisure", function(req, res){
  res.sendFile(__dirname + "/public/Projects/Sports/display.html");
});
app.get("/heritage", function(req, res){
  res.sendFile(__dirname + "/public/Projects/Heritage/display.html");
});
app.get("/industrial", function(req, res){
  res.sendFile(__dirname + "/public/Projects/Industrial/display.html");
});
app.get("/birla", function(req, res){
  res.sendFile(__dirname + "/public/Projects/Birla/display.html");
});
app.get("/residential-project-1", function(req, res){
  res.sendFile(__dirname + "/public/Projects/Residential/individual-1.html");
});
app.get("/residential-project-2", function(req, res){
  res.sendFile(__dirname + "/public/Projects/Residential/individual-2.html");
});
app.get("/residential-project-3", function(req, res){
  res.sendFile(__dirname + "/public/Projects/Residential/individual-3.html");
});
app.get("/residential-project-4", function(req, res){
  res.sendFile(__dirname + "/public/Projects/Residential/individual-4.html");
});
app.get("/residential-project-5", function(req, res){
  res.sendFile(__dirname + "/public/Projects/Residential/individual-5.html");
});
app.get("/residential-project-6", function(req, res){
  res.sendFile(__dirname + "/public/Projects/Residential/individual-6.html");
});
app.get("/hospitality-project-1", function(req, res){
  res.sendFile(__dirname + "/public/Projects/Hospitality/individual-1.html");
});
app.get("/hospitality-project-2", function(req, res){
  res.sendFile(__dirname + "/public/Projects/Hospitality/individual-2.html");
});
app.get("/hospitality-project-3", function(req, res){
  res.sendFile(__dirname + "/public/Projects/Hospitality/individual-3.html");
});
app.get("/hospitality-project-4", function(req, res){
  res.sendFile(__dirname + "/public/Projects/Hospitality/individual-4.html");
});
app.get("/sports-and-liesure-project", function(req, res){
  res.sendFile(__dirname + "/public/Projects/Sports/individual.html");
});
app.get("/heritage-project", function(req, res){
  res.sendFile(__dirname + "/public/Projects/Heritage/individual.html");
});
app.get("/industrial-project", function(req, res){
  res.sendFile(__dirname + "/public/Projects/Industrial/individual.html");
});
app.get("/birla-project", function(req, res){
  res.sendFile(__dirname + "/public/Projects/Birla/individual.html");
});
app.listen(5000, function(){
  console.log("started on port 5000");
});
