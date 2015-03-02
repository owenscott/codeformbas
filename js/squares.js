if ($('#boxes')) {
	

	var rules = {
		'#box1': {
			'background-color': {
				rule: 'green',
				text: 'Make background color green'
			},
			'border-color': {
				rule: 'blue',
				text: 'Make border color blue'
			}
		},
		'#box2': {
			'background-color': {
				rule: 'yellow',
				text: 'Make background color yellow'
			},
			'border-color': {
				rule: 'red',
				text: 'Make border color red'
			},
			'border-width': {
				rule: '5px',
				text: 'Make border 5px thick'
			},
			'height': {
				rule: '150px',
				text: 'Make box 150px high'
			},
			'width': {
				rule: '200px',
				text: 'Make box 200px wide'
			}
		},
		'#box3': {
			'background-color': {
				rule: 'black',
				text: 'Make background color black'
			},
			'border-color': {
				rule: 'orange',
				text: 'Make border color orange'
			},
			'border-width': {
				rule: '10px',
				text: 'Make border 10px wide'
			},
			'border-style': {
				rule: 'dashed',
				text: 'Make border dashed'
			},
			'border-radius': {
				rule: '20px',
				text: 'Make 20px rounded corners'
			},
			'width': {
				rule: '200px',
				text: 'Make box 200px wide'
			}
		}
	}

	//create style element
	


	Object.keys(rules).forEach(function(boxId) {

		var box = rules[boxId];
		var hints = $('<ul></ul>');
		var style = $('<style></style>');
		

		// iterate through rules and create style element and hint ul

		style.append(boxId + '-answer {\t')
		
		Object.keys(box).forEach(function(prop) {
			var hint = $('<li class="' + prop +'"></li>').addClass('incomplete').html(box[prop].text)
			hint.append('<img src="img/checkmark.png">')
			hints.append(hint);
			style.append('\t' + prop + ': ' + box[prop].rule + ';\n');
		})

		// append style to DOM
		style.append('}\n');
		$('html > head').append(style);

		// add container
		$('#boxes').append('<div class="box-container clearfix" id="' + boxId.slice(1, boxId.length) + '-container"></div>');

		var container = $('#boxes').find('.box-container').last();

		// add answer box
		container.append('<div id="' + boxId.slice(1, boxId.length) + '-answer" class="box"></div>');

		// add question box
		container.append('<div id="' + boxId.slice(1, boxId.length) + '" class="box"></div>');

		// add and style to dom
		container.append(hints);

		// turn on mutation observers

		var observer = new MutationObserver(function(mutations) {
		    mutations.forEach(function(mutation) {
		        Object.keys(box).forEach(function(prop) {
		        	var $hint = $(boxId + '-container .' + prop);
		        	if (mutation.target.style[prop] === box[prop].rule) {
		        		$hint.addClass('complete');
		        		$hint.removeClass('incomplete');
		        	}
		        	else {
		        		$hint.removeClass('complete');
		        		$hint.addClass('incomplete');
		        	};

		        })
		    });    
		});

		var cheatObserver = new MutationObserver(function(mutations) {
			var messaged = false;
			mutations.forEach(function(mutation) {
				if (!messaged) {
					alert('Hey. Don\'t edit the style on the answer box!');
					messaged = true;					
				}
			})
		})

		var target = document.getElementById(boxId.slice(1, boxId.length));
		observer.observe(target, { attributes : true, attributeFilter : ['style'] });
		var cheatTarget = document.getElementById(boxId.slice(1, boxId.length) + '-answer');
		cheatObserver.observe(cheatTarget, {attributes: true, attributeFilter: ['style']});

	})

}



	// var target = document.getElementById('box');
	// observer.observe(target, { attributes : true, attributeFilter : ['style'] });



