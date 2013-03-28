module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: [
        '**.js'
      ],
      options: {
        browser: true,
        camelcase: true,
        curly: true,
        eqeqeq: true,
        forin: true,
        immed: true,
        indent: 2,
        latedef: true,
        newcap: true,
        noarg: true,
        noempty: true,
        quotmark: 'single',
        undef: true,
        unused: true,
        trailing: true,
        predef: [
          'require', 'exports', 'module', 'phantom', 'console'
        ]
      }
    }
  });
  // Load tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');


  // Task definition.
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('travis', ['jshint']);


};