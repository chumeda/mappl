(function() {
	'use strict';
	
	angular
		.module('mappl2.pins', [
			'mappl2.pins.controllers',
			'mappl2.pins.directives',
			'mappl2.pins.services'
		]);
		
	angular
		.module('mappl2.pins.controllers', []);
		
	angular
		.module('mappl2.pins.directives', ['ngDialog']);
		
	angular
		.module('mappl2.pins.services', []);
})();
