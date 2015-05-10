angular.module('myApp',[])

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

		$scope.processForm = function(){
			if($scope.myForm.$valid) {
				console.log("The form is valid");
				return true;
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

		};

	});
