(function(){
    'use strict';

      
    angular.module('data')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject =['$http']
    function MenuDataService ($http){
        var menu = this;

        menu.getAllCategories = function (){
            return $http({
                methord: "GET",
                url:("https://davids-restaurant.herokuapp.com/categories.json")
            }).then((result)=>{
                var foundItems = [];
                result.data.forEach((Category)=>{
                    foundItems.push(Category);
                })
                return foundItems;
            })
        }


        menu.getItemsForCategory = function (categoryShortName){
            var interm_url = "https://davids-restaurant.herokuapp.com/menu_items.json?category="
            var total_url = interm_url + categoryShortName;
            console.log(total_url);
            return $http({
                methord: "GET",
                url:(total_url)
            }).then((result)=>{
                var foundItems = [];
                result.data.menu_items.forEach((Category)=>{
                    foundItems.push(Category);
                })
                console.log(foundItems);
                return foundItems;
            })
        }


    }
    
})();
