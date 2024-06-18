var mysql = require('mysql');
var conf = require('./db_config.json')

var con = mysql.createConnection({
  host: conf.host,
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

function create_position(postition_code,position_name,position_desc){
    var sql = `INSERT INTO positions (position_code,position_name,position_desc) VALUES (${postition_code},${position_name},${position_desc})`
    con.query(sql,)
}