app.factory('myFirstServive',function(){
	var factoryService = {};
	console.log("factoryService instantiation");
	factoryService.save = function(employee){
		console.log(employee);
		employee.name = employee.name.toUpperCase();
		employee.city = employee.city.toUpperCase();
		return employee;
	}
	return factoryService;
});