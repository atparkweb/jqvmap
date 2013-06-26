module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %>\n' +
          '*\n' +
          '* <%= pkg.repository.url %>\n' +
          '*\n' +
          '* Licensed under the <%= pkg.license %> license.\n' +
          '*/\n\n'
      },
      dist: {
        files: {
          'jqvmap/jquery.vmap.min.js': ['jqvmap/jquery.vmap.js']
        }
      }
    }

  });
};