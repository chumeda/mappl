(function() {
	'use strict';
	
	angular
		.module('mappl2.routes')
		//edit angular configuration
		.config(config);
		
	config.$inject = ['$routeProvider'];
	
	/**
	 * @name config
	 * @desce Define valid application routes 
	 * injecting $routeProvider as dependency to let add routing to client
	 */
	function config($routeProvider) {
		$routeProvider.when('/register', {
			controller: 'RegisterController', 
			controllerAs: 'vm',
			templateUrl: '/static/templates/authentication/register.html'
		}).when('/login', {
			controller: 'LoginController',
			controllerAs: 'vm',
			templateUrl: '/static/templates/authentication/login.html'
		}).when('/', {
			controller: 'IndexController',
			controllerAs:'vm',
			templateUrl: '/static/templates/layout/index.html'
		}).when('/boards', {
			controller: 'BoardsIndexController', 
			controllerAs: 'vm',
			templateUrl: '/static/templates/layout/boards-index.html'
		}).when('/:username', {
			controller: 'ProfileController',
			controllerAs: 'vm',
			templateUrl: '/static/templates/profiles/profile.html'
		}).when('/:username/settings', {
			controller: 'ProfileSettingsController',
			controllerAs: 'vm',
			templateUrl: '/static/templates/profiles/settings.html'
		}).when('/:username/boardview', {
			controller: 'ViewBoardController',
			controllerAs: 'vm',
			templateUrl: '/static/templates/boards/open-board.html'
		})
		.otherwise('/');
		
	}
})();
