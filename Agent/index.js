const express= require("express");
const fs=require("fs");
const sharp=require("sharp");

app= express();

app.set("view engine","ejs");


app.use("/resurse", express.static(__dirname+"/resurse"))

console.log("Director proiect:",__dirname);

app.get(["/", "/index", "/home"], function(req, res){
    //res.sendFile(__dirname+"/index.html");
    console.log(obImagini);
    res.render("pagini/index", {ip:req.ip, imagini:obImagini.imagini});
})

app.get(["/hello"], function(req, res){
    //res.sendFile(__dirname+"/index.html");
    // ruleaza executabil 
    //  fis=rezultat
    res.render("pagini/hello.ejs", {ip:req.ip, imagini:obImagini.imagini});
})
app.get(["/listDir"], function(req, res){
    //res.sendFile(__dirname+"/index.html");
    // ruleaza executabil 
    //  fis=rezultat
    const { exec } = require('child_process');
    exec('py py/listdir.py C:\ > py/output.ejs', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    });
    
    res.render("../py/output.ejs", {ip:req.ip, imagini:obImagini.imagini});
})

app.get("/*.ejs", function(req, res){
    //res.sendFile(__dirname+"/index1.html");
    res.status(403).render("pagini/403");
})

/*
app.get("/despre", function(req, res){
    //res.sendFile(__dirname+"/index1.html");
    res.render("pagini/despre");
})
*/
app.get("/ceva", function(req, res, next){
    res.write("<p style='color:pink'>Salut-1</p>");
    console.log("1");
    next();
    //res.end();
})
app.get("/ceva", function(req, res, next){
    res.write("Salut-2");
   
    console.log("2");
    next();
})


app.get("/*", function(req, res){
    res.render("pagini"+req.url, function(err, rezRender){
        if (err){
            if(err.message.includes("Failed to lookup view")){
                console.log(err);
                res.status(404).render("pagini/404");
            }
            else{
                
                res.render("pagini/eroare_generala");
            }
        }
        else{
            console.log(rezRender);
            res.send(rezRender);
        }
    });
   
    //console.log("generala:",req.url);
    res.end();
})

function creeazaImagini(){
    var buf=fs.readFileSync(__dirname+"/resurse/json/galerie.json").toString("utf8");


    obImagini=JSON.parse(buf);//global



    //console.log(obImagini);
    for (let imag of obImagini.imagini){
        let nume_imag, extensie;
        [nume_imag, extensie ]=imag.fisier.split(".")// "abc.de".split(".") ---> ["abc","de"] imagine.png->imagine.webp
        let dim_mic=150
        
        imag.mic=`${obImagini.cale_galerie}/mic/${nume_imag}-${dim_mic}.webp` //nume-150.webp // "a10" b=10 "a"+b `a${b}`
        //console.log(imag.mic);


        imag.mare=`${obImagini.cale_galerie}/${imag.fisier}`;
        if (!fs.existsSync(imag.mic))
            sharp(__dirname+"/"+imag.mare).resize(dim_mic).toFile(__dirname+"/"+imag.mic);


        let dim_mediu=300;
        imag.mediu=`${obImagini.cale_galerie}/mediu/${nume_imag}-${dim_mediu}.png` 
        if (!fs.existsSync(imag.mediu))
            sharp(__dirname+"/"+imag.mare).resize(dim_mediu).toFile(__dirname+"/"+imag.mediu);

        
    }

}
creeazaImagini();


app.listen(8081);
console.log("A pornit")





