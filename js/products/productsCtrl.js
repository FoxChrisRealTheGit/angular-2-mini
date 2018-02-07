angular.module("myApp").controller('productsCtrl', function ($scope, $stateParams, productsSrvc) {
    if ($stateParams.id === 'shoes') {
        productsSrvc.getShoeData().then(res=>{
            $scope.productData = res.data
        })
    } else if ($stateParams.id === 'socks') {
        productsSrvc.getSockData().then(res=>{
            $scope.productData = res.data
        })
    }
})