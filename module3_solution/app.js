(function(){
    'use strict';

    
    angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController',NarrowItDownController)
    .service('MenuSearchService',MenuSearchService);
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){
        var list = this;
        list.searchTerm ="";
        // console.log(list.searchTerm);
        // list_items = [];
        list.found = function()
            {
                var list_items = [];
                // console.log(list.searchTerm);
                var list_item = MenuSearchService.getMatchedMenuItems(list.searchTerm);
                list_item.then((test)=>{
                    //console.log(test);
                    list_items = test;
                    //console.log("blah ",list_items[0].id);
                    // console.log(list_items);
                    return list_items;
                })
                
            }


    }
    MenuSearchService.$inject =['$http']
    function MenuSearchService($http) {
        var menu = this;
        menu.getMatchedMenuItems = function (searchTerm){
            return $http({
                method: "GET",
                url:("https://davids-restaurant.herokuapp.com/menu_items.json")}
            ).then((result)=>{
                var foundItems = [];
                //console.log(result);
                result.data.menu_items.forEach((menuitem)=>{
                    if (menuitem.description.includes(searchTerm)){
                        foundItems.push(menuitem);
                    }
                })
                return foundItems;
            })

        }
        
    }


})();