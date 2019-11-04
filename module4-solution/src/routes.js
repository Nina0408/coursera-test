(function() {
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/templates/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/main-categories.template.html',
      controller: 'CategoriesController as cc',
      resolve: {
        categoriesData : ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }

    })

    .state('items', {
      url: '/items/{categoryName}',
      templateUrl : 'src/templates/main-items.template.html',
      controller: 'ItemsController as ic',
      resolve: {
        itemsData: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.categoryName);
        }]
      }
    });
  }
})()
