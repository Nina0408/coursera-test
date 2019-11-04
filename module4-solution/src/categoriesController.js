(function() {
  angular.module('data')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject=['categoriesData'];

  function CategoriesController(categoriesData) {
    console.log('~~~~~~~~~~~~~categoriesData');
    var cc = this;
    cc.categoriesData = categoriesData.data;
  }
})();
