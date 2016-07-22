
var Todo_model=require('./model');
// insert value into mongo
module.exports.insert=function(req,res){
	// console.log(req.body);
	var meetup=new Todo_model(req.body);
	meetup.save(function(err,result){
		res.json(result);
	} );
}
// remove single value 

//list all
module.exports.list=function(req,res){
	Todo_model.find({},function(err,results){
		// console.log("inside list of db");
		// console.log(results);
		res.json(results);
	});
}

module.exports.delete=function(req,res){
	Todo_model.findOneAndRemove(
		{_id:req.params.id},
		function(err,book){
			if(err){
				res.send("error deleting");
			}else{
				console.log("id value:"+req);
				console.log("inside delete:"+book);
				res.send("204");
		}


	}
	);

	}