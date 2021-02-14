(function () {
    'use strict';
    
    angular.module('data')
    .controller('categoriesController', categoriesController);
    
    
    categoriesController.$inject = ['MenuDataService', 'items'];
    function categoriesController(MenuDataService, items) {
        var cat = this;
        cat.items = items;
    }
    
    })();
    