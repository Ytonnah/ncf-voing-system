// the middleware for sending and parsing request

var db_req = require('./Database')

function Auth(){
    //
}

function Create_Position(req,res){
    //db_req.Create_Position(req)
    //parse the request

    db_req.Create_Position(req.position_code,req.position_name,req.position_code)
    
    return(
        res = 500
    )
    
}

function Read_Position(){

}