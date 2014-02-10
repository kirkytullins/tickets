var ticketsApp = angular.module('tickets', []);

//This configures the routes and associates each route with a view and a controller

ticketsApp.config(function ($routeProvider) {
    $routeProvider
        .when('/about',
        {
            controller: '',
            templateUrl: 'app/partials/about.html'
        })        
        .when('/contact',
        {
            controller: '',
            templateUrl: 'app/partials/contact.html'
        })        
        .when('/generate_it',
        {
            controller: 'ticketsController',
            templateUrl: 'app/partials/ticketsView.html'
        })        
        .when('/form',
            {
                controller: 'formController',
                templateUrl: 'app/partials/formView.html'
            })        
        .otherwise({ redirectTo: '/tickets.html' });
});
