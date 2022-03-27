const express = require("express");
const exec = require('node-async-exec');

app= express();
app.set("view engine","ejs");

console.log("Director proiect:",__dirname);

app.get(["/", "/index", "/home"], function(req, res){
    res.render("pagini/index", {ip:req.ip});
})

app.get(["/bro"], function(req, res){
    const { exec } = require('child_process');
    console.log("Cerere agent bro");
    
    (async () => {
        try {
            await exec('python3 views/listdir.py\ > views/output.ejs', (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                }
                console.log(`stdout: ${stdout}`);
                console.error(`stderr: ${stderr}`);
                });
        } catch (err) {
            console.log(err);
        }
    })()

    
            
        
    res.render("output.ejs", {ip:req.ip }) ;
})

app.listen(8081);
console.log("A pornit Agentul")





