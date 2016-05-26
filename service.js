angular.module('userProfiles').service('mainService', function($http, $q) {

    this.getUsers = function() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://reqres.in/api/users?page=1'
        }).then(function(response) {
            var parsedResponse = response.data.data;
            var turtles = ["Leonardo","Michelangelo","Raphael","Donatello"];
            for (var i = 0; i < parsedResponse.length; i++) {
                parsedResponse[i].first_name = turtles[i];
            }
            deferred.resolve(parsedResponse);
        });
        return deferred.promise;
    };

});
