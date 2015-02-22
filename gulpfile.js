var marked = require('marked'),
		_ = require('underscore'),
		cheerio = require('cheerio'),
		fs = require('fs'),
		path = require('path'),
		gulp = require('gulp');

var paths = {
	content: '_lessons/**/*.md',
	templates: '_templates/*.ejs'
}

gulp.task('listen', function() {
	gulp.watch(paths.content, ['build']);
	gulp.watch(paths.templates, ['build']);
})

gulp.task('build', function() {

	var lessons = fs.readdirSync('./_lessons'),
			template = _.template(fs.readFileSync('./_templates/main.ejs').toString());

	// iterate through all of the lesson directories
	lessons.forEach(function(lessonDir) {
		

		var contents = [],
				outputHeaders = [];
		var sections = fs.readdirSync(path.join('./_lessons', lessonDir));

		var title = lessonDir.slice(0,1).toUpperCase() +  lessonDir.slice(1, lessonDir.indexOf(/[0-9]/)) + ' ' +  lessonDir.slice(lessonDir.indexOf(/[0-9]/), lessonDir.length);

		// iterate through all of the sections in each directory and create an HTML page		
		sections.forEach(function(sectionFile) {
			var fileContents = fs.readFileSync(path.join('./_lessons', lessonDir, sectionFile)).toString();
			var sectionMarkup = marked(fileContents);
			var sectionId = sectionFile.slice(2, sectionFile.indexOf('.md'));
			var sectionContents = '<section id="' + sectionId + '">\n' + sectionMarkup + '\n</section>';
			sectionContents = sectionContents.replace(/(&lt;)[^(&)]+(&gt;)/g, function(text) {
				return '<span class="tag">' + text + '</span>';
			});
			contents.push(sectionContents);
			var $ = cheerio.load(sectionMarkup);
			var headers = $('h1');
			for (var i = 0; i < headers.length; i++) {
				outputHeaders.push({
					id: sectionId,
					text: headers[i].children[0].data
				})
			}
		})

		var output = template({
			sections: contents,
			headers: outputHeaders,
			title: title
		});

		// create folders as needed
		if (!fs.existsSync('lessons')) {
			fs.mkdirSync('lessons');
		}
		if (!fs.existsSync(path.join('lessons', lessonDir))) {
			fs.mkdirSync(path.join('lessons', lessonDir));			
		}
		// write contents into folder
		fs.writeFileSync(path.join('lessons',lessonDir, 'index.html'), output);
	
		// move images into folder as needed
		if (fs.existsSync(path.join('img', lessonDir))) {
			gulp.src(path.join('img', lessonDir, '*.png')).pipe(gulp.dest(path.join('lessons', lessonDir, 'img')))
		}
		// move examples into folder as needed
		if (fs.existsSync(path.join('examples', lessonDir))) {
			gulp.src(path.join('examples', lessonDir, '*.html')).pipe(gulp.dest(path.join('lessons', lessonDir, 'examples')))
		}

	})



})

gulp.task('default', ['build', 'listen']);
