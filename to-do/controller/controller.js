var app= angular.module('app',['ngResource']);

app.controller('todoController',['$scope','$resource',function($scope,$resource){
	
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

	// $scope.insert=function(){
	// 	var rest=new Rest();
	// 	rest.body={name:$scope.todoname,
	// 	description:$scope.descriptionvalue,
	// 	time:$scope.timevalue};
		
	// 	rest.$save(function(result){
	// 		$scope.lists.push(result);

	// });
	// };


	//remove the value from list
	// $scope.remove=function(id){
	// 	console.log(id);
		
		
	// };
}]);