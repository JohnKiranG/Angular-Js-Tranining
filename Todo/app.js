// Create Module
var app = angular.module("todoApp", []);

// controller inheritance
app.controller("taskController", ["$scope", "taskService", function ($scope, taskService) {
	$scope.task = {};
	$scope.tasks = [];

	$scope.noDataHide = true;

	if($scope.tasks.length <=0 ) {
		$scope.noDataHide = false;		
	}

	$scope.save = function(newTask) {
		$scope.tasks = taskService.save(newTask);
		$scope.task = {};

		if($scope.tasks.length <=0 ) {
			$scope.noDataHide = false;		
		}

		console.log($scope.tasks);
	}
}]);		