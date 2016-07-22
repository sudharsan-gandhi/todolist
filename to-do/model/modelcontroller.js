
var Todo_model=require('./model');
// insert value into mongo
module.exports.insert=function(req,res){
	console.log(req.body);
	var meetup=new Todo_model(req.body);
	meetup.save(function(err,result){
		res.json(result);
	} );
}
// remove single value 

//list all
module.exports.list=function(req,res){
	Todo_model.find({},function(err,results){
		console.log("inside list of db");
		console.log(results);
		res.json(results);
	});
}