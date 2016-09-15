angular.module('rotaractApp')
	.controller('guestAboutCtrl',['$scope','$state','$timeout','guestFactory',function($scope,$state,$timeout,guestFactory){
	
	activate();
	function activate(){
		guestFactory.getStudent()
		.then(function(response){
			$scope.students = response.data;
			console.log($scope.students);
		},function(error){
			console.log(error);
		});
	}
	$scope.showArray = ['name','courseid','ophone'];
	//console.log($scope.showArray);
	$scope.getDetails = function(){
					$timeout(function(){
				console.log($scope.student);
				$scope.$apply();
			});
		
		

	}
}]);
