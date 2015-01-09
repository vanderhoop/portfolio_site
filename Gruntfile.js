//Grunt is just JavaScript running in node, after all...
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.initConfig({
  concat: {
    js: {
      src: [
        'javascripts/views/home.js',
        'javascripts/views/work.js',
        'javascripts/views/contact.js',
        'javascripts/router.js',
        'javascripts/main.js'
      ],
      dest: 'bundle.js',
    }
  },
  uglify: {
    options: {
      mangle: false
    },
    my_target: {
      files: {
        'javascripts/bundle.min.js': ['javascripts/bundle.js']
      }
    }
  },
  cssmin: {
  target: {
    files: {
      'stylesheets/css/style.min.css': ['stylesheets/css/style.css']
    }
  }
}
});
};
