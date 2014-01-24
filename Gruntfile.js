module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/**/*.js'],
                dest: 'dist/<%= pkg.filename %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.filename %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.filename %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        qunit: {
            files: ['test/**/*.html']
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        // sass: {
        //     dist: {
        //         options: {
        //             trace: true,
        //             style: 'compressed'
        //         },
        //         files: {
        //             'src/sticky.scss': 'dist/sticky.css'
        //         }
        //     }
        // },
        // watch: {
        //     sass: {
        //         options: {
        //             // Monitor Sass files for changes and compile them, but don't reload the browser.
        //             livereload: false
        //         },
        //         files: '**/*.scss',
        //         tasks: ['sass'],
        //     },
        //     css: {
        //         // LiveReload on the CSS files instead of their Sass source files and you get
        //         // the style to refresh without reloading the page in the browser.
        //         files: '**/*.css'
        //     },
        //     options: {
        //         livereload: true
        //     }
        // }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-sass');
    // grunt.registerTask('sass', ['sass']);
    grunt.registerTask('test', ['jshint', 'qunit']);
    grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

};