eventsApp.controller('EditProfileController', function($scope, gravatarUrlBuilder, userData) {
    $scope.getGravatarUrl = function(email) {
        return gravatarUrlBuilder.buildGravatarUrl(email);
    }

    $scope.saveUser = function(user) {
        userData.saveUser(user).$promise.
            then(function (user) {
                console.log('success', user)
            }).
            catch(function (error) {
                console.log('error', error)
            })
    }
});