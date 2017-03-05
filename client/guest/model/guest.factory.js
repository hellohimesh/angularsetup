angular.module('rotaractApp')
.factory('guestFactory',['$q','$http','$rootScope',function($q,$http,$rootScope){
 var obj = {};

obj.getStudent =function(){
	
			 	 var defer = $q.defer();
			 	 $http.post("http://www.saurashtra.school/server/guest/get_alumni.php")
			 	 .then(function(response){
			 		 defer.resolve(response);
			 	 },function(error){
			 		 defer.reject(error);
			 	 });
			 	 return defer.promise;
			  }


return obj;
}])