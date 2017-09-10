// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // all of our configuration will go here
    // configure jshint to validate js files -----------------------------------
    jshint: {
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },

      // when this task is run, lint the Gruntfile and all js files in src
      build: ['Grunfile.js', 'src/**/*.js']
    },
    sass: {
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none',
        },
        files: [{
          expand: true,
          cwd: 'src/scss/',
          src: ['*.scss'],
          dest: 'build',
          ext: '.css',
        }]
      }
    },
    eslint: {
      options: {
        configFile: '.eslintrc.json',
      },
      target: ['src/.']
    },
    babel: {
      options: {
        sourceMap: false,
        presets: ['env'],
      },
      dist: {
        files: {
          'build/index.js': 'src/index.js'
        }
      }
    },
    watch: {
      src: {
        files: ['src/**/*.js', 'src/**/*.scss'],
        tasks: ['sass', 'babel'],
        options: {
          livereload: true,
        }
      }
    }

  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass', 'babel', 'watch']);

};