;(function(){
	'use strict'

	angular
		.module('ngClock.watch', [])
		.directive('myWatch', function($interval){
			return {
				restrict: 'E',
				templateUrl: 'app/directives/clock.tmpl.html',
				link: function(scope, element, attrs){
					
					scope.loading = true;

        			var hours,
        			    minutes,
        			    seconds,
				    clock = element.children(),
				    hourArrow = clock[0].querySelector('.hour'),
        			    minutArrow = clock[0].querySelector('.minut'),
        			    secondArrow = clock[0].querySelector('.second'),
        			    digital = clock[0].querySelector('.digital');

					updateTime();

			        function updateTime() {

			        	$interval(function(){
			        		var date = new Date();

			        		hours = date.getHours() % 12 || 12;
			        		minutes = date.getMinutes();
			        		seconds = date.getSeconds();

							secondArrow.style.webkitTransform = 'rotate('+((seconds * 6)  )+'deg)';
							minutArrow.style.webkitTransform = 'rotate('+((minutes * 6) + seconds / 10 )+'deg)';
							hourArrow.style.webkitTransform = 'rotate('+((hours * 30)  + minutes / 2 )+'deg)';

 							hours = (hours.toString().length == 1) ? '0' + hours : hours;
 							minutes = (minutes.toString().length == 1) ? '0' + minutes : minutes;
 							seconds = (seconds.toString().length == 1) ? '0' + seconds : seconds;

							scope.digitalTime = (hours +' : '+ minutes +' : '+ seconds);

							scope.loading = false;

						}, 1000);
			        }

			        scope.$watch('digital', function(value) {
			        	scope.digital = value;
			        });
				}
			}
		});
})();
