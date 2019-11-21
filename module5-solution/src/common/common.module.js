(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://enigmatic-sierra-15242.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
