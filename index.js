const express = require("express");
const ejs = require("ejs");
const app = express();
var jsdom = require("jsdom");
const jest = require("jest-mock");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
const opn = require("opn")
var $ = jQuery = require('jquery')(window);
window.open = jest.fn();

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.listen(process.env.PORT || 3000,function(){
  console.log("Server started on port 3000 bruv")
});

app.get("/",function(req,res){
  res.render('pages/index');});

app.get("/indexs",function(req,res){
  res.render('pages/indexs');});
