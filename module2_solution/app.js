const { errorHandlingConfig } = require("angular");

(function(){
    'use strict';    

    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .provider('ShoppingListCheckOffService',ShoppingListCheckOffServiceProvider);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var list_buy = this;

        list_buy.items = ShoppingListCheckOffService.getItems_buy;

    }
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var list_bou = this;

        list_bou.items = ShoppingListCheckOffService.getItems_bou;
        
    }

    function ShoppingListCheckOffService (){
        var service = this;

        var items_buy = [];
        var items_bou = [];
        service.addItem_buy = function (itemName, quantity) {
            var item = {
              name: itemName,
              quantity: quantity
            };
            items_buy.push(item);
        };
        service.removeItem_buy = function (itemIndex) {
            items_buy.splice(itemIndex, 1);
        };

        service.addItem_bou = function (itemName, quantity) {
            var item = {
              name: itemName,
              quantity: quantity
            };
            items_bou.push(item);
        };
        service.removeItem_bou = function (itemIndex) {
            items_bou.splice(itemIndex, 1);
        };

        service.getItems_buy = function () {
            return items_buy;
        };
        service.getItems_bou = function () {
            return items_bou;
        };

        service.buy_item = function(itemIndex){
            var item_temp = {
                name: items_buy[itemIndex].name,
                quantity: items_buy[itemIndex].quantity
            };
            items_buy.splice(itemIndex, 1);
            items_bou.push(item_temp);
        };


    }

    function ShoppingListCheckOffServiceProvider(){
        var provider = this;
        provider.$get = function (){
            var shoppinglist = new ShoppingListCheckOffService();
            shoppinglist.addItem_buy("water", 50);
            shoppinglist.addItem_buy("pizza", 2);
            shoppinglist.addItem_buy("soda", 5);
            shoppinglist.addItem_buy("spoons", 2);
            shoppinglist.addItem_buy("fork", 3);
            
            return shoppinglist;
        };
    }
})();