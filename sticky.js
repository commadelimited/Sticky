/*
	Sticky v2.0.1 by Andy Matthews
	http://twitter.com/commadelimited

	forked from Sticky by Daniel Raftery
	http://twitter.com/ThrivingKings
*/
(function ($) {

	$.sticky = $.fn.sticky = function (note, options, callback) {

		// generate unique ID based on the hash of the content.
		var hashCode = function(str){
				var hash = 0,
					i = 0,
					c = '',
					len = str.length;
				if (len === 0) return hash;
				for (i = 0; i < len; i++) {
					c = str.charCodeAt(i);
					hash = ((hash<<5)-hash) + c;
					hash &= hash;
				}
				return 's'+Math.abs(hash);
			},
			content = (!note) ? this.html() : note, // Passing in the object instead of specifying a note
			o = {
				'position': 'top-right', // top-left, top-right, bottom-left, or bottom-right
				'speed': 'fast', // animations: fast, slow, or integer
				'allowdupes': true, // true or false
				'autoclose': 5000 // integer or false
			},
			uniqID = hashCode(content), // Somewhat of a unique ID
			display = true,
			duplicate = false,
			tmpl = '';

		// merge default and incoming options
		if (options) $.extend(o, options);

		// Handling duplicate notes and IDs
		$('.sticky').each(function () {
			if ($(this).attr('id') === hashCode(content)) {
				duplicate = true;
				if (!o.allowdupes) {
					display = false;
				}
			}
			if ($(this).attr('id') === uniqID) uniqID = hashCode(content);
		});

		// Make sure the sticky queue exists
		if (!$('.sticky-queue').length) {
			$('body').append('<div class="sticky-queue ' + o.position + '">');
		}

		// Can it be displayed?
		if (display) {
			// Building and inserting sticky note
			tmpl = '<div class="sticky border-POS" id="ID"><span class="sticky-close"></span><div class="sticky-note">NOTE</div></div>';
			$('.sticky-queue').prepend(
				tmpl
					.replace('POS', o.position)
					.replace('ID', uniqID)
					.replace('NOTE', content)
			);
			$('#' + uniqID).slideDown(o.speed);

			display = true;
		}

		// Listeners
		$('.sticky').ready(function () {
			// If 'autoclose' is enabled, set a timer to close the sticky
			if (o.autoclose) {
				$('#' + uniqID).delay(o.autoclose).fadeOut(o.speed, function(){
					// remove element from DOM
					$(this).remove();
				});
			}
		});

		// Closing a sticky
		$('.sticky-close').on('click', function () {
			$('#' + $(this).parent().attr('id')).dequeue().fadeOut(o.speed);
		});

		// Callback data
		var response = {
			'id': uniqID,
			'duplicate': duplicate,
			'displayed': display
		};

		// Callback function?
		if (callback) {
			callback(response);
		}

	};
})(jQuery);