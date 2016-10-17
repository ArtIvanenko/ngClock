;(function(){
	'use strict'

	angular
		.module('ngClock', [
			'ui.router',
			'ngClock.main',
			'ngClock.watch'
		])
		.config(clockConfig);

	function clockConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');
	}

})();
