'use strict';
var dbConn = require('../../config/db.config');
//object create
var User = function(user){
  this.user_id        = user.user_id;
  this.website      = user.website;
  this.password     = user.password;
};
User.create = function (newuser, result) {
dbConn.query("INSERT INTO website set ?", newuser, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res);
  result(null, res);
}
});
};
User.findById = function (id, result) {
dbConn.query("Select * from website where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
module.exports= User;