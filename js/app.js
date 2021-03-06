angular.module('myApp', ["ui.router"]);

angular.module('myApp').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("home", {
        url: '/',
        templateUrl: './js/home/homeTmpl.html'
    }).state("", {
        url: '/products/:id',
        templateUrl: './js/products/productsTmpl.html',
        controller: 'productsCtrl'
    }).state("settings", {
        url: '/settings',
        templateUrl: './js/settings/settingsTmpl.html'
    })

    $urlRouterProvider.otherwise('/')
})