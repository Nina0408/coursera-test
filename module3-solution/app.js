(function() {

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('APIBasePath', 'https://davids-restaurant.herokuapp.com')
  .directive('foundItems', foundItems);

  NarrowItDownController.$inject=['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var controller = this;
    controller.found = [];

    controller.narrowDown = function() {
      var promise = MenuSearchService.getMatchedMenuItems(controller.searchTerm);
      promise.then (function(response){
        controller.found = response;
      });
    }

    controller.onRemove = function(index){
      controller.found.splice(index, 1);
    }
  }

  MenuSearchService.$inject=['$http', 'APIBasePath'];
  function MenuSearchService($http, APIBasePath) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
        method: "GET",
        url: APIBasePath + '/menu_items.json'
      }).then(function(result) {
        var foundItems1 = [];
        if(searchTerm != null && searchTerm != undefined && searchTerm.trim().length != 0) {
          var menuItems = result.data.menu_items;
          var length = menuItems.length;
          for (var i = 0; i < length; i++) {
            if (menuItems[i].description.indexOf(searchTerm) != -1) {
              foundItems1.push(menuItems[i]);
            }
          }
        }
        return foundItems1;
      })
    }
  }

  function foundItems() {
    var DDO = {
      templateUrl: 'foundItems.html',
      scope: {
        foundList: '<',
        onRemove:'&'
      }

    };
    return DDO;
  }

})();
