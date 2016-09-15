angular.module('rotaractApp')
.factory('guestFactory',['$q','$http','$rootScope',function($q,$http,$rootScope){
 var obj = {};

obj.getStudent =function(name){
			 	 var defer = $q.defer();
			 	 $http.post("http://132.140.160.112/collegeAdmin/server/admin/student/getStudents.php")
			 	 .then(function(response){
			 		 defer.resolve(response);
			 	 },function(error){
			 		 defer.reject(error);
			 	 });
			 	 return defer.promise;
			  }


return obj;
}])