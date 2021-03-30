var app = angular.module("app", []);
app.controller('ctrl',['$scope',function($scope){
	/*$scope.name = 'sfgs';*/
	$scope.a = 10;
	$scope.b = 5;
	$scope.name  = 'arun';

	$scope.sum = function(){
		$scope.a = $scope.a*2;
		$scope.b = $scope.b*2;
		$scope.result = $scope.a + $scope.b;
	}

}])