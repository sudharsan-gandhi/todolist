// var mongoose=require('mongoose');

// module.exports=mongoose.model('ToDo',new {
// 	name: String,
// 	description:String,
// 	time:Date
// });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var blogSchema = new Schema({
  name: String,
  description:String,
  time: { type: Date, default: Date.now },
});
 
module.exports=mongoose.model('ToDo',blogSchema);