angular.module('myApp',[])
	.controller('myCtrl',function($scope){
		$scope.jobTitle = "Job title";
		$scope.femaleName = "Female name";
		$scope.celebrity = "Celebrity";

		$scope.uselessSkill = "Useless skill";
		$scope.tediousTask = "Tedious task";
		$scope.dirtyTask = "Dirty task";

		$scope.adjective = "Adjective";
		$scope.obnxCelebrity = "Obnoxious celebrity";
		$scope.hugeNumber = "Huge number";
	});