(function () {
	'use strict';
	
	angular
  		.module('mappl2', [
  			'mappl2.config',
  			'mappl2.routes',
  			'mappl2.authentication',
  			'mappl2.layout',
  			'mappl2.pins', 
  			'mappl2.utils',
  			'mappl2.boards'
  		]);
  		
  	angular
  		.module('mappl2.config', []);
  		
  	angular
  		.module('mappl2.routes', ['ngRoute']);
  		
  	angular
  		.module('mappl2')
  		.run(run);
  		
  	run.$inject = ['$http'];
  	
  	/**
  	 * @name run
  	 * @desc Update xsrf $http headers to align with django's defaults
  	 */
  	function run($http) {
  		$http.defaults.xsrfHeaderName = 'X-CSRFToken';
  		$http.defaults.xsrfCookieName = 'csrftoken';
  	}
})();
