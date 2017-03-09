/*
* @Author: Ali
* @Date:   2017-03-07 20:19:11
* @Last Modified by:   Ali
* @Last Modified time: 2017-03-09 17:01:49
*/

'use strict';
 
// declare modules
angular.module('Authentication', []);
angular.module('Home', []);
 
angular.module('basicAuth', [
    'Authentication',
    'Home',
    'ngRoute',
    'ngCookies'
])
  
.config(['$routeProvider', function ($routeProvider) {
 
    $routeProvider
        .when('/login', {
            controller: 'loginController',
            templateUrl: 'views/login.html'
        })
  
        .when('/', {
            controller: 'homeController',
            templateUrl: 'views/home.html'
        })
  
        .otherwise({ redirectTo: '/login' });
}])
  
.run(['$rootScope', '$location', '$cookies', '$http',
    function ($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common.Authorization = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
  
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);