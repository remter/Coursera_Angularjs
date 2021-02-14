(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('itemsController', itemsController);
    
    
    itemsController.$inject = ['MenuDataService', 'items', '$stateParams' ];
    function itemsController(MenuDataService, items, $stateParams) {
        var item = this;
        console.log($stateParams)
        item.items = items;
        item.cat = $stateParams.long_cat;
    }
    
    })();
    