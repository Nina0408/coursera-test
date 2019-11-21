(function() {
  angular.module('public')
  .service('UserService', UserService);

  UserService.$inject = ['$http', 'ApiPath']
  function UserService($http, ApiPath) {
      var userService = this;
      userService.user = null;

      userService.submit = function(user) {
        return $http({
          method: "GET",
          url: ApiPath + '/menu_items/'+ user.menuNumber+'.json'
        }).then(function(result) {
          console.log('service~~~~~~~~~~result', result);
          userService.user = user;
          userService.user.menuItem = result.data;
          return result;
        }).catch(function(error) {
          console.log('service~~~~~~~~~~error', error);
          return error;
        });
      }

      userService.getUserInfo = function() {
        return userService.user;
      }
    }

})();
