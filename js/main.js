var makeSectionActive = function(selector) {
	$(activeSectionSelector).addClass('active');
	$('a[href=' + activeSectionSelector + ']').parent().addClass('awesome');
}


$(document).ready(function(){
	
	var pageLink = window.location.href.split('/').slice(-1)[0];
	console.log(pageLink);

	if (pageLink) {
		activeSectionSelector = pageLink;
	}
	else {
		// first section
		activeSectionSelector = '#' + $('article').find('section').first().attr('id');
	}

	makeSectionActive(activeSectionSelector);

	$('#links').find('a').each(function(i, a) {
		$(a).on('click', function(e) {
			if (activeSectionSelector) {
				$(activeSectionSelector).removeClass('active');
				$('a[href=' + activeSectionSelector + ']').parent().removeClass('awesome');
			}
			activeSectionSelector = $(e.target).attr('href');
			makeSectionActive(activeSectionSelector);
		})
	})

})

