/*
* @Author: Ali
* @Date:   2017-03-07 08:24:03
* @Last Modified by:   Ali
* @Last Modified time: 2017-03-09 14:33:56
*/

'use strict';

angular.module('Authentication').controller('loginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
        // reset login status
        AuthenticationService.clearCredentials();

        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.login($scope.username, $scope.password, function(response) {
                if(response.success) {
                    AuthenticationService.setCredentials($scope.username, $scope.password);
                    $location.path('/');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);

angular.module('Home').controller('HomeController',
    ['$scope', function ($scope) {
    }]);