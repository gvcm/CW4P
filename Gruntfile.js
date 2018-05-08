module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    bowercopy: grunt.file.readJSON('bowercopy.json'),

    connect: {
      options: {
        port: 9000,
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: ['app']
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        'app/scripts/*.js'
      ]
    },

    jsonlint: {
      all: [
        '{bower,bowercopy,package}.json',
        '.jshintrc'
      ]
    },

    clean: [
      'app/vendor'
    ],

    watch: {
      js: {
        files: ['<%= jshint.all %>'],
        tasks: ['newer:jshint:all']
      },
      json: {
        files: ['<%= jsonlint.all %>'],
        tasks: ['newer:jsonlint:all']
      },
      bowercopy: {
        files: ['bowercopy.json'],
        tasks: ['clean', 'bowercopy']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'app/index.html',
          '<%= watch.js.files %>',
          '<%= watch.json.files %>'
        ]
      }
    }
  });

  grunt.registerTask('default', ['connect:livereload', 'watch']);
  grunt.registerTask('dist', []);
};
