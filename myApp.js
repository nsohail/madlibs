angular.module('myApp',['ngAnimate'])

	.controller('myCtrl',function($scope){
		// $scope.jobTitle = "Job title";
		// $scope.femaleName = "Female name";
		// $scope.celebrity = "Celebrity";

		// $scope.uselessSkill = "Useless skill";
		// $scope.tediousTask = "Tedious task";
		// $scope.dirtyTask = "Dirty task";

		// $scope.adjective = "Adjective";
		// $scope.obnxCelebrity = "Obnoxious celebrity";
		//$scope.hugeNumber = "Huge number";

		$scope.myForm = {};
		$scope.view = "words";
		$scope.animationMove = true;

		$scope.processForm = function(){
			console.log("Test");
			if($scope.myForm.$valid) {
				console.log("The form is valid");
				$scope.view = "story";
				$scope.animationMove = false;
			}
			else {
				console.log("The form is invalid");
				return false;
			}
			
		};

		$scope.reset = function() {
			console.log("reset");
			$scope.jobTitle = "";
			$scope.femaleName = "";
			$scope.celebrity = "";

			$scope.uselessSkill = "";
			$scope.tediousTask = "";
			$scope.dirtyTask = "";

			$scope.adjective = "";
			$scope.obnxCelebrity = "";
			$scope.hugeNumber = "";
			$scope.error= "";
			$scope.view = "words";
			$scope.animationMove = true;
		};

	});
