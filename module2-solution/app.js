(function() {
  angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var tbCtrl = this;
    tbCtrl.items = ShoppingListCheckOffService.getItems();

    tbCtrl.buy = function(itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var abCtrl = this;
    abCtrl.items = ShoppingListCheckOffService.getBoughtItems();
    
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var items = [
      { name: "cookies", quantity: 10 },
      { name: "lipstick", quantity: 100 },
      { name: "facemask", quantity: 200 },
      { name: "cream", quantity: 300 },
      { name: "eye cream", quantity: 50 }
    ];

    var boughtItems = [];

    service.getItems = function() {
      return items;
    }

    service.getBoughtItems = function() {
      return boughtItems;
    }

    service.buyItem = function(itemIndex) {
      var item = items[itemIndex];
      boughtItems.push(item);
      items.splice(itemIndex, 1);
    }

  }

})();
