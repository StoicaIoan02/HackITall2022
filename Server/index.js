const express= require("express");
app = express();
app.set("view engine","ejs");
ipAgent = 'http://10.81.135.17:8081/'
ipServer = 'http://10.81.135.28:8081'

//'http://10.81.135.17:8081/'  ip agent
console.log("Director proiect:",__dirname);

app.get(["/", "/index", "/home"], function(req, res){
    res.render("pagini/index", {ip:req.ip, ipAgent : ipAgent, ipServer: ipServer}); /// req.ip = ip Utlilizator
})

app.listen(8080);
console.log("A pornit Serverul")





