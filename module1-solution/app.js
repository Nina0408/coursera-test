(function() {

  angular.module("LunchCheck", [])

  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.items = "";
    $scope.message = "";
    $scope.checkItems = function() {
      var itemArray = $scope.items.split(',');
      var count = 0;
      for (var i = 0; i < itemArray.length; i++) {
        if (itemArray[i].trim().length > 0) {
          count++;
        }
      }
      if (count == 0) {
        $scope.message = "Please enter data first";
      } else if (count <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    }
  }

})();
