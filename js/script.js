import 'bootstrap';
import 'fullpage.js';
require('../css/style.css');
require('../css/first-screen.css');
require('../css/main-description.css');
require('../css/service-price-data.css');
require('../css/contacts.css');

$(document).ready(function() {

	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
		menu: '#myMenu'
	});
});