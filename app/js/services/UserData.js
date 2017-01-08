eventsApp.factory('userData', function ($resource) {
    return {
        saveUser: function (user) {
            return $resource('/data/users/:userName', {userName: '@userName'}).save(user)
        }
    }
})