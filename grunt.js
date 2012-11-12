module.exports = function(grunt){
	grunt.initConfig({
		compass: {
			dist: {
				src: 'app/sass/',
				dest: 'app/public/css/'
			}
		},

		reload: {
			port: 62,
			proxy: {
				host: 'localhost',
				port: 8000
			}
		},

		exec: {
			browse: {
				command: 'start "" "http://localhost:62/app/public"'
			}
		},

		watch: {
			compass: {
				files: ['app/sass/**/*.scss'],
				tasks: 'compass reload'
			},
			reload: {
				files: [
					'app/public/**/*.html',
					'app/public/js/**/*.js',
					'app/public/css/**/*.css',
					'app/public/img/**/*'
				],
				tasks: 'reload'
			}
		}
	});

	grunt.loadNpmTasks('grunt-compass');
	grunt.loadNpmTasks('grunt-reload');
	grunt.loadNpmTasks('grunt-exec');
	grunt.registerTask('default', 'server reload exec watch');
};