eventsApp.controller('LoginPageController', function LoginPageController($scope, userData, $cookies) {
    $scope.loginUser = function(user) {
        userData.loginUser(user).$promise.
            then(function (user) {
                console.log('correct', user)
                $cookies.put('user', user.userName)
                return window.location = '/EventDetails.html'
            }).
            catch(function (error)  {
                console.log('bad', error)
            })
    }
})