module.exports = function(grunt) {
	grunt.initConfig({
		coffee : {
			all: {
				expand: true,
				flatten: true,
				cwd: './src/coffee/',
				src: ['*.coffee'],
				dest: 'js/',
				ext: '.js'
			}
		},
		less : {
			all2: {
				src: ['./src/less/*.less'],
				dest: 'css/main.css'
			}
		},

		watch : {
			styles : {
				files : ['./src/less/**/*.less'],
				tasks : ['less']
			},

			coffeeChange : {
				files : ['./src/coffee/**/*.coffee'],
				tasks : ['coffee']
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-coffee");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-watch");
}
