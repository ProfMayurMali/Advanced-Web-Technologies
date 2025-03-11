var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');  // Removes default '!'
    
    $routeProvider
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: 'about.html',
            controller: 'AboutController'
        })
        .when('/contact', {
            templateUrl: 'contact.html',
            controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});


// Define controllers
app.controller('HomeController', function($scope) {
    $scope.message = 'Welcome to the Home Page!';
});

app.controller('AboutController', function($scope) {
    $scope.message = 'About Us: Learn more about our company.';
});

app.controller('ContactController', function($scope) {
    $scope.message = 'Contact Us: Get in touch with us.';
});
