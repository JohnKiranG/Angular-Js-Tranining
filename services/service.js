app.service('selfService',function(){
	console.log("selfService instantiation");
	this.save = function(employee){
		console.log(employee);
		employee.name = employee.name.toUpperCase();
		employee.city = employee.city.toUpperCase();
		return employee;
	}
});