(function () {
    'use strict';
    angular
        .module('jhipster.users', [])
        .config(['$interpolateProvider', function ($interpolateProvider) {
            return $interpolateProvider.startSymbol('{(').endSymbol(')}');
          }
        ])
        .controller('UsersCtrl', UsersCtrl);

    UsersCtrl.$inject = ['$http', '$scope'];

    function UsersCtrl($http, $scope) {
        $scope.users = [];
        $scope.showFeatured = true;
        loadUsers();

        function loadUsers() {
            $http.get('/documentation-archive-v1-to-v5/v4.6.2/companies-using-jhipster/users.json').then(function(response) {
                $scope.users = response.data.users;
            });
        }
     }
})();
