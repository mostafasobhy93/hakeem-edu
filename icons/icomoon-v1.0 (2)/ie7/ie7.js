/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-lines': '&#xe978;',
		'icon-arrow-down': '&#xe900;',
		'icon-arrow-left': '&#xe901;',
		'icon-arrow-right': '&#xe902;',
		'icon-arrow-up': '&#xe903;',
		'icon-assignment': '&#xe904;',
		'icon-book': '&#xe90b;',
		'icon-book-check': '&#xe90d;',
		'icon-browser': '&#xe910;',
		'icon-browser-red': '&#xe915;',
		'icon-calculator': '&#xe91a;',
		'icon-call': '&#xe91e;',
		'icon-camera': '&#xe91f;',
		'icon-cart': '&#xe920;',
		'icon-cart1': '&#xe925;',
		'icon-check-circle': '&#xe92a;',
		'icon-chevron-left': '&#xe92c;',
		'icon-chevron-right': '&#xe92d;',
		'icon-close': '&#xe92e;',
		'icon-exam': '&#xe92f;',
		'icon-facebook': '&#xe936;',
		'icon-heart': '&#xe937;',
		'icon-heart-outline': '&#xe938;',
		'icon-home': '&#xe939;',
		'icon-home-wave': '&#xe93a;',
		'icon-hourglass-end': '&#xe93c;',
		'icon-hourglass-white': '&#xe93e;',
		'icon-instagram': '&#xe940;',
		'icon-linkedin': '&#xe941;',
		'icon-lock': '&#xe942;',
		'icon-lock-outline': '&#xe943;',
		'icon-logout': '&#xe944;',
		'icon-mail-fast': '&#xe947;',
		'icon-mail-outline': '&#xe94b;',
		'icon-notification': '&#xe94c;',
		'icon-pdf': '&#xe94f;',
		'icon-pencil-book': '&#xe954;',
		'icon-report': '&#xe95a;',
		'icon-search': '&#xe95e;',
		'icon-subscribe': '&#xe95f;',
		'icon-teacher': '&#xe960;',
		'icon-telegram': '&#xe965;',
		'icon-trash': '&#xe966;',
		'icon-twitter': '&#xe96a;',
		'icon-user': '&#xe96b;',
		'icon-user-add': '&#xe96d;',
		'icon-user-outline': '&#xe970;',
		'icon-user-remove': '&#xe971;',
		'icon-youtube': '&#xe974;',
		'icon-youtube-red': '&#xe976;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
