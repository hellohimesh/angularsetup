angular.module('rotaractApp')
	.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

	$stateProvider
	  .state('welcome',{
	    url : '/',
	    templateUrl : 'guest/view/welcome.html',
	    controller : 'guestWelcomeCtrl'
  	})
	  .state('postHolders',{
	    url : '/postHolders',
	    templateUrl : 'guest/view/welcome.html',
	    controller : 'guestPostHoldersCtrl'
  	})
	 .state('events',{
	    url : '/events',
	    templateUrl : 'guest/view/welcome.html',
	    controller : 'guestEventsCtrl'
  	})
	 .state('eventDetail',{
	    url : '/events/:id',
	    templateUrl : 'guest/view/welcome.html',
	    controller : 'guestEventDetailCtrl'
  	})
	.state('about',{
	    url : '/about',
	    templateUrl : 'guest/view/about.html',
	    controller : 'guestAboutCtrl'
  	})
  	$urlRouterProvider.otherwise('/about');
	}])