

let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", function(req,res){
  res.render("index.ejs");
});

app.get("/connect", function(req,res){
  res.render("connect.ejs");
});

app.get("/download", function(req,res){
  res.render("download.ejs");
});











// =================Server==================
app.listen(4000, function(){
  console.log("Server is running");
});
