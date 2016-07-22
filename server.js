console.log("hello from node"); 
var port=3000;
var express = require("express");
var	app=express();
var	bodyParser=require("body-parser");
var	modelcontroller=require('./to-do/model/modelcontroller');
var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/todo');

	app.use(bodyParser());
	app.use( bodyParser.json() ); 
	app.use(bodyParser.urlencoded({    
                                extended: true
                })); 


	// routes
	app.get('/',
		function(req,res){
		res.sendfile(_dirname="to-do/view/index.html")
		}
	);
	
	
	// app.get('/app',modelcontroller.remove);


	// middleware
	app.use('/node_modules',express.static(_dirname='node_modules'));
	app.use('/controller',express.static(_dirname='to-do/controller'));

	//routes
	// app.post('/app',modelcontroller.insert);
	app.get('/app',modelcontroller.list);
	app.post('/app',modelcontroller.insert);
	app.delete('/app/:id',modelcontroller.delete);

	// port start
	app.listen(port,function(){
		console.log("port is open");
	})




	// app.use(bodyParser());

	// app.get('/',function(req,res){
	// 	res.sendfile(_dirname="views/index.html");
	// })

	// app.use('/js',express.static(_dirname='js'));
	// app.use('/node_modules',express.static(_dirname='node_modules'));
	// app.get('/api/meetups',meetupsController.list);
	// app.post('/api/meetups',meetupsController.create);
	// app.listen(3000,function(){
	// 	console.log("Im listening....");
	// })