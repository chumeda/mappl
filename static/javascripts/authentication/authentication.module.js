(function() {
	'use strict';
	
	angular
		.module('mappl2.authentication', [
			//dependencies
			'mappl2.authentication.controllers',
			'mappl2.authentication.services'
		]);
		
	angular
		.module('mappl2.authentication.controllers', []);
		
	angular
		.module('mappl2.authentication.services', ['ngCookies']);
})();
