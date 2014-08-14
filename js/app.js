var myApp = angular.module('myApp', []);

myApp.controller('CartForm', ['$scope', function ($scope) {
    $scope.productList = [
        {
        'qty': 0,
        'name': 'Product A',
        'cost': 20.00,
        'discount_qty': [0,0],
        'subtotal': 0,
        'edit_price': false},
        {
        'qty': 0,
        'name': 'Product B',
        'cost': 50.00,
        'discount_qty': [5,3],
        'subtotal': 0,
        'edit_price': false},
        {
        'qty': 0,
        'name': 'Product C',
        'cost': 30.00,
        'discount_qty': [0,0],
        'subtotal': 0,
        'edit_price': false}
    ];
    
    $scope.cartList = [
        
    ];
    
    $scope.addItem = function(item) {
        if (item.qty) {
            $scope.cartList.push(item);
        } else {
            alert("Please enter quantity");
        }
    };
    
    $scope.removeItem = function(index) {
        $scope.cartList.splice(index, 1);
    };
    
    $scope.checkCart = function(obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (angular.equals(list[i], obj)) {
                return true;
            }
        }
    };
    
    $scope.total = function() {
        var total = 0;
        angular.forEach($scope.cartList, function(item) {
            var savings = Math.floor(item.qty / item.discount_qty[0]) * item.cost * (item.discount_qty[0] - item.discount_qty[1]);
            if (item.discount_qty[0] && Math.floor(item.qty / item.discount_qty[0])) {
                item.subtotal = item.qty * item.cost - savings;
                total += item.subtotal;
            } else {
                item.subtotal = item.qty * item.cost;
                total += item.subtotal;
            }
        })

        return total;
    }


}]);
