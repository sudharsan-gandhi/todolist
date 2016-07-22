var mongoose=require('mongoose');

module.exports=mongoose.model('ToDo',{
	name: String,
	description:String,
	time:Date
});