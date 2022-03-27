const express= require("express");
app = express();
app.set("view engine","ejs");

//'http://10.81.135.17:8081/'  ip agent
console.log("Director proiect:",__dirname);

app.get(["/", "/index", "/home"], function(req, res){
    res.render("pagini/index", {ip:req.ip}); /// req.ip = ip Utlilizator
})

app.listen(8080);
console.log("A pornit Serverul")





