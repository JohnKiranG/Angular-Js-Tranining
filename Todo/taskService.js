app.service('taskService',function() {
	console.log("taskService instantiation");

	this.tasks = [];

	this.save = function(task){
		var loTask = {};

		angular.copy(task, loTask);

		// insert
		if(loTask.id == undefined || loTask.id != "") {
			loTask.id = this.tasks.length+1;
			this.tasks.push(loTask);

			// alert(messages.SAVE_SUCCESS);
		} else {
			// update
			this.tasks[loTask.id - 1] = loTask;
		}

		return this.tasks;
	}
});