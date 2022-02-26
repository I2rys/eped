//Main
function detect(req){
    try{
        decodeURI(req.path)

        return false
    }catch{
        return true
    }
}

//Exporter
module.exports = {
    detect
}