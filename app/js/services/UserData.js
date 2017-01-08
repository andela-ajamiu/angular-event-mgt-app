eventsApp.factory('userData', function ($resource) {
    return {
         getUser: function(user) {
            return $resource('/data/users/:userName' + '.json', {userName: '@userName'}).get({userName: user})
        },
        
        saveUser: function (user) {
            return $resource('/data/users/:userName', {userName: '@userName'}).save(user)
        }
    }
})