(function() {
  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('APIBasePath', 'https://davids-restaurant.herokuapp.com');

  MenuDataService.$inject = ['$http', 'APIBasePath'];

  function MenuDataService($http, APIBasePath) {
    var service = this;

    service.getAllCategories = function() {
      var response =  $http({
        method: "GET",
        url: APIBasePath + '/categories.json'
      });
      return response;
    };

    service.getItemsForCategory = function(categoryShortName) {
      return $http({
        method: "GET",
        url: APIBasePath + '/menu_items.json?category=' + categoryShortName
      });
    }
  }
})();
