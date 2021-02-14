(function(){
    'use strict';

    var msg = '';
      
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


        menu.getAllCategories = function (categoryShortName){
            var interm_url = "https://davids-restaurant.herokuapp.com/menu_items.json?category="
            var total_url = interm_url + categoryShortName;
            return $http({
                methord: "GET",
                url:(total_url)
            }).then((result)=>{
                var foundItems = [];
                result.data.forEach((Category)=>{
                    foundItems.push(Category);
                })
                return foundItems;
            })
        }


    }
    
})();
