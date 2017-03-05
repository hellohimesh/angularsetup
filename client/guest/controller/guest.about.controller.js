angular.module('rotaractApp')
	.controller('guestAboutCtrl',['$scope','$state','$timeout','guestFactory',function($scope,$state,$timeout,guestFactory){
	
	// activate();
	// function activate(){
	// 	guestFactory.getStudent()
	// 	.then(function(response){
	// 		$scope.students = response.data;
	// 		console.log($scope.students);
	// 	},function(error){
	// 		console.log(error);
	// 	});
	// }
	// $scope.showArray = ['name','courseid','ophone'];
	// //console.log($scope.showArray);
	// $scope.getDetails = function(){
	// 	event.preventDefault();
	// 				$timeout(function(){
						
	// 			console.log($scope.student);
	// 			$scope.$apply();
	// 		});
		
		

	// }

	// $scope.scan = function () {
 //      barcodeScanner.scan().then( function (result) {
 //        if (result.canceled) {
 //          return;
 //        }
 //        console.log(result.text);
 //        // text from qr code or barcode is contained in result.text
 //      }, function (err) {
 //        alert(err);
 //      });
 //    };
 //    $scope.handleScan = function(){

 //    }
// javascript:(function(){
//   var $document = window.angular.element(document).injector().get('$document');

//   var triggerKeypressEvent = function(char) {
//     var event = new Event('keypress');
//     event.which = char.charCodeAt(0);
//     $document.triggerHandler(event);
//   };

//   var barcode = prompt('Text to scan');
//   for (var i = 0; i < barcode.length; i++) {
//     triggerKeypressEvent(barcode[i]);
//   }
// })();
$scope.scanNow = function(){
 $('#reader').html5_qrcode(function(data){
        console.log(data);
    },
    function(error){
     console.log(error);
    }, function(videoError){
    	console.log("video stream"+videoError);
        //the video stream could be opened
    }
);
}
$scope.generateQrCode = function(x){
	
	console.log("generating qrcode for"+x);
	new QRCode(document.getElementById("qrcode"), "dd");
	$scope.qr ='';
}
}]);
