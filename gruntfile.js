module.exports = function(grunt) {
	//Load Grunt configuration files from grunt folder
  require('load-grunt-config')(grunt, {
    config: {
      name: 'maintainable-gruntfile'
    }
  });
  //Load Grunt tasks from tasks folder
  grunt.loadTasks('tasks');
};