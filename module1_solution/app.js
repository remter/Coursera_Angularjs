(function(){
    'use strict';

    var msg = '';
      
    angular.module('LunchCheck',[])
    .controller('LunchCheckController', calc_good);
    
    calc_good.$inject = ['$scope'];
    function calc_good ($scope) {
        $scope.data = [];
        $scope.updatemsg = function (){
            var val = $scope.data+ '';
            var test = val.split(',');
            var filt = test.filter(function (a){
                return a !=' ' && a != '';
            });
            if(filt.length > 3){msg = 'Too much!';}
            else if( filt == ""){ msg = 'Please enter data first!';}
            else {
                msg = 'Enjoy!';
            }
        }
        $scope.saymessage = function (){
            var res = msg;
            var out = res;
            return out;
        };
    }
})();
