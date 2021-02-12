(function(){
    'use strict';

    
    angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController',NarrowItDownController)
    .service('MenuSearchService',MenuSearchService)
    .directive('foundItems', foundItemsDirective);

    function foundItemsDirective() {
        var doo = {
            templateUrl: "foundItems.html",
            Restrict: 'E',
            scope: {
                items: '<',
                onRemove: '&',
                show: '<'
            }
        };


        return doo;
    }



    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){
        var list = this;
        list.searchTerm ="";
        list.found = [];
        list.display = true;
        // console.log(list.searchTerm);
        list.check_search = function(){
            return ( list.searchTerm == "" ? true : false);
        }
        
        list.list_items = function(){  
            if(list.check_search()){
                list.found = [];
                list.display = false;
            }
            else{
            var list_temp = MenuSearchService.getMatchedMenuItems(list.searchTerm);
            list_temp.then(function (response){
                list.found = response;
                if(list.found.length == 0){
                    list.display = false;
                }
                else{
                list.display = true;
                }
            })
            }
        }
        list.remove = function(index){
            list.found.splice(index,1);
        }
        // var list_temp = [];
        // list.found = function(){
        //     console.log(list.searchTerm);
           
        //     console.log(list_items);
        //     return list_items;
        // }


    }
    MenuSearchService.$inject =['$http']
    function MenuSearchService($http) {
        var menu = this;
        menu.getMatchedMenuItems = function (searchTerm){
            return $http({
                method: "GET",
                url:("https://davids-restaurant.herokuapp.com/menu_items.json")
            }
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