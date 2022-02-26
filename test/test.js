//Dependencies
const Express = require("express")
const EPED = require("../index")

//Variables
const Web = Express()
const Port = process.env.PORT || 8080

//Main
Web.use("", function(req, res, next){
    const paramError = EPED.detect(req)

    if(paramError){
        return res.send("Failed.")
    }else{
        return res.send("Success.")
    }
})

Web.listen(Port, ()=>{
    console.log(`Server is running in port ${Port}`)
})