(function() {
  angular.module('data')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['itemsData'];

  function ItemsController(itemsData) {
    var ic = this;
    ic.itemsData = itemsData.data.menu_items;
  }
})();
