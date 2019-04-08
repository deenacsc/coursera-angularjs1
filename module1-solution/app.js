(function(){
  "use strict";

  angular.module("LunchCheck",[])

  .controller("LunchCheckerController", LunchCheckerController);

  LunchCheckerController.$inject = ['$scope'];
  function LunchCheckerController($scope){
      $scope.menu = "";
      $scope.status = "";
      $scope.statusColor="";

      $scope.setStatus = function(){
        if ($scope.menu.length == 0){
          $scope.status = "Please enter data first";
          $scope.statusColor="red";
          return;
        }
        var menuArray = $scope.menu.split(',');
        var trimmedArray = menuArray.filter(function(elem){return elem.length !=0;})
        $scope.statusColor="green";
        if (trimmedArray.length > 3) {
          $scope.status = "Too much!";
        }
        else{
          $scope.status = "Enjoy!";
        }
      };
  }



})();
