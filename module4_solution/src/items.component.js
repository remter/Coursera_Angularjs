(function () {
    'use strict';
    
    angular.module('data')
    .component('items', {
      templateUrl: 'src/templates/item.template.html',
      bindings: {
        items: '<'
      }
    });


    
    })();
    