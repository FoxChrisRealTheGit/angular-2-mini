angular.module('myApp').service('productsSrvc', function($http) {
    this.getShoeData = function(){
        return $http.get('https://practiceapi.devmountain.com/products?category=shoes').then(res=>{
            return res.data.results
        })
    }
    this.getSockData = function(){
        return $http.get('https://practiceapi.devmountain.com/products?category=socks').then(res=>{
            return res.data.results
        })
    }
});
