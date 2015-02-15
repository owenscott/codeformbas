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
	var outputHeaders = []

	var lessons = fs.readdirSync('./_lessons'),
			template = _.template(fs.readFileSync('./_templates/main.ejs').toString()),
			contents = [];

	lessons.forEach(function(lessonDir) {
		var sections = fs.readdirSync(path.join('./_lessons', lessonDir));
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
	})


	var output = template({
		sections: contents,
		headers: outputHeaders,
		title: 'Week 1'
	});

	fs.writeFileSync('index.html', output)	
})

gulp.task('default', ['build', 'listen']);
