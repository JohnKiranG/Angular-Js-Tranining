var app = angular.module("app", []);
app.controller('ctrl',['$scope','myFirstServive','selfService',function($scope,myFirstServive,selfService){
	$scope.employee = {};
	$scope.employeeList = [];

/*factory*/
	/*$scope.save = function(employee){
		var emp = myFirstServive.save(employee);
		$scope.employeeList.push(emp);
		console.log($scope.employeeList);
	}*/


/*service*/
	$scope.save = function(employee){
		var emp = selfService.save(employee);
		$scope.employeeList.push(emp);
		console.log($scope.employeeList);
	}

}])