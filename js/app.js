var shoppingApp = angular.module('shoppingApp', []);

shoppingApp.controller('ProductListCtrl', function ($scope) {
    $scope.products = [
        {'name': 'Product A',
         'cost': 20,
         'discount': 0,
         'discount_quantity': 0},
        {'name': 'Product B',
         'cost': 50,
         'discount': 100,
         'discount_quantity': 5},
        {'name': 'Product C',
         'cost': 30,
         'discount': 0,
         'discount_quantity': 0}
    ];
    
    $scope.total = 0;
});
