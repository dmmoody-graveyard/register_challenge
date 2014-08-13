function CartForm($scope) {
    $scope.invoice = {
        items: [{
            qty: 0,
            name: 'Product A',
            cost: 20.00,
            discount_qty: [0,0],
            subtotal: 0,
            edit_price: false},
            {
            qty: 0,
            name: 'Product B',
            cost: 50.00,
            discount_qty: [5,3],
            subtotal: 0,
            edit_price: false},
            {
            qty: 0,
            name: 'Product C',
            cost: 30.00,
            discount_qty: [0,0],
            subtotal: 0,
            edit_price: false}
               ]
    };

    $scope.total = function() {
        var total = 0;
        angular.forEach($scope.invoice.items, function(item) {
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
}
