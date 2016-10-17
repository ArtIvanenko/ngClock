;(function (){
	'use strict'

	angular
		.module('ngClock.main')
		.config(routerConfig);

	function routerConfig($stateProvider){
		$stateProvider.state('/',{
			url: '/',
			security: true,
			templateUrl: 'app/main/main.tmpl.html',
			controller: 'mainCtrl',
			controllerAs: 'mc'
		});
	}
	
})();