var app= angular.module('app',['ngResource']);

app.controller('todoController',['$scope','$resource','$http',function($scope,$resource,$http){
	
var Rest=$resource('/app');


	// get lists from db
	// $scope.lists=[
	// 				{ _id:"1",name:"sudharsan",description:"some content here",time:"21:31 21/32/1231"},
	// 				{ _id:"2",name:"karthik",description:"some content here",time:"21:31 21/32/1231"}
	// 			];
	$scope.lists=[];

	// query to get list
	Rest.query(function(result){
			$scope.lists=result;
		});

 

	// insert new values

	$scope.insert=function(){
		var rest=new Rest();
		rest.name=			$scope.todoname;
		rest.description=	$scope.descriptionvalue,
		rest.time=			$scope.timevalue;
		
		rest.$save(function(result){
			$scope.lists.push(result);

	});
	};


	//remove the value from list
	$scope.remove=function(values){
		// ///////////////////////////////////////try///////////////////////////////
			var value=values.currentTarget.attributes.data.nodeValue;
			var url="/app/"+value;
			var del=$resource(url);
			var d= new del();
			d.$delete(function(result){
				console.log("deleted");
			});



		////////////////////////////////////////end///////////////////////////////////
		//console.log("id:"+values.currentTarget.getAttribute("id"));
		console.log("id:"+values.currentTarget.attributes.data.nodeValue);
		console.log("button remove clicked");
		
		// var rest = new Rest();
		// rest._id=value;
		// rest.$delete(function(result){
		// 	console.log("afterdelete:"+result);

		// });

		Rest.query(function(result){
			$scope.lists=result;
		});

		
	};
}]);