(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Premade list page
  .state('catList', {
    url: '/cat-list',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'categoriesController as catList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('itemList', {
    url: '/item-list/{cat}',
    templateUrl: 'src/templates/item.template.html',
    controller: 'itemsController as itemList',
    params: {cat: null, long_cat: null},
    resolve: {
      items: ['$stateParams', 'MenuDataService', function ( $stateParams, MenuDataService) {
        // console.log($stateProvider)
        console.log($stateParams.cat)
        console.log($stateParams.long_cat)
        return MenuDataService.getItemsForCategory($stateParams.cat);
      }]
    }
  })

}

})();
