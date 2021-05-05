(function () {
    'use strict'
    angular.module('myFirstApp',[])
    .controller('MyFirstController',MyFirstController) 
    MyFirstController.$inject=['$scope'];

        function MyFirstController($scope) {
            $scope.dishes = "";
            $scope.inputClass = "";
            $scope.message = "";
            $scope.messageClass = "text-success";
            
            $scope.check = function() {
                $scope.message = messageForDishes($scope.dishes);
                $scope.messageClass = classForMessage($scope.dishes);
                $scope.inputClass = classForInput($scope.dishes);
              };
          
              $scope.reset = function() {
                $scope.inputClass = "";
                $scope.message = "";
                $scope.messageClass = "text-success";
              }
            }
          
            function messageForDishes(dishes) {
              if (dishes.trim() == "") {
                return "Please Enter The Data First";
              }
              else if (numberOfDishes(dishes) <= 3) {
                return "Enjoy!";
              }
              else {
                return "Too Much!";
              }
            }
          
            function classForMessage(dishes) {
              if (dishes.trim() == "") {
                return "text-danger";
              }
              else {
                return "text-success";
              }
            }
          
            function classForInput(dishes) {
              if (dishes.trim() == "") {
                return "has-error";
              }
              else {
                return "has-success";
              }
            }
          
            function numberOfDishes(dishes) {
              var items = dishes.split(",");
              var numberOfItems = 0;
              for (var i = 0; i < items.length; i++) {
                if (items[i].trim() != "") {
                  numberOfItems ++;
                }
              }
              return numberOfItems;
            }
        
    
})()