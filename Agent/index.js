var express = require("express");
const exec = require('node-async-exec');
var json = require('./database.json');

//const login={"admin":"admin"};
var app= express();
app.set("view engine","ejs");


console.log("Director proiect:",__dirname);

app.get(["/", "/index", "/home"], function(req, res){
    res.render("pagini/index", {ip:req.ip});
})

app.get(["/bro"], function(req, res){
    const { exec } = require('child_process');
    console.log("Cerere agent bro");

    console.log(json[req.query.u]);
    console.log(req.query.p);

    if(json[req.query.u] == req.query.p )
    {
        if(req.query.c==1)
            command="listdir.py";
        else if(req.query.c==2)
            command="viewContent.py";
        else if(req.query.c==41)
            command="create_file.py";
        else if(req.query.c==42)
            command="create_folder.py";
        exec("python3 py/" + command + " " + req.query.x + " \"" + req.query.f + "\"", (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
            res.render("../output.ejs", {ip:req.ip }) ;
            });
    }
    else res.render("../error.ejs", {ip:req.ip }) ,console.log("bad login");
})

app.listen(8081);
console.log("A pornit Agentul")





