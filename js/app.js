function CartForm($scope) {
    $scope.invoice = {
        items: [{
            qty: 0,
            name: 'Product A',
            cost: 20.00,
            discount_qty: 0,
            discount: 0,
            subtotal: 0},
            {
            qty: 0,
            name: 'Product B',
            cost: 50.00,
            discount_qty: 5,
            discount: 100,
            subtotal: 0},
            {
            qty: 0,
            name: 'Product C',
            cost: 30.00,
            discount_qty: 0,
            discount: 0,
            subtotal: 0}
               ]
    };

    $scope.addItem = function() {
        $scope.invoice.items.push({
            qty: 1,
            description: '',
            cost: 0
        });
    },

    $scope.removeItem = function(index) {
        $scope.invoice.items.splice(index, 1);
    },

    $scope.total = function() {
        var total = 0;
        angular.forEach($scope.invoice.items, function(item) {
            if (item.discount_qty > 0 && Math.floor(item.qty / item.discount_qty) >= 1) {
                item.subtotal = item.qty * item.cost - (Math.floor(item.qty / item.discount_qty) * item.discount);
                total += item.subtotal;
            } else {
                item.subtotal = item.qty * item.cost;
                total += item.subtotal;
            }
        })

        return total;
    }
}