(function() {
	'use strict';
	
	angular
		.module('mappl2.boards', [
			'mappl2.boards.controllers',
			'mappl2.boards.directives', 
			'mappl2.boards.services'
		]);
		
	angular
		.module('mappl2.boards.controllers', []);
	
	angular
	 	.module('mappl2.boards.directives', ['ngDialog']);
	 	
	 angular 
	 	.module('mappl2.boards.services', []);
})();
