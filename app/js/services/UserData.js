eventsApp.factory('userData', function ($resource) {
    return {
         getUser: function(user) {
            return $resource('/data/users/:userName' + '.json', {userName: '@userName'}).get({userName: user})
        },
        
        saveUser: function (user) {
            return $resource('/data/users/:userName', {userName: '@userName'}).save(user)
        },

        loginUser: function (user) {
            // console.log('nnnn')
            return $resource('/data/users/:userLogin', {userLogin: '@userName'}).save(user)
        }, 

        updateVote: function (user) {
            // console.log(user.votes)
            return $resource('/data/users/:userFile', {userFile: '@userName'}).save(user.votes)
        }
    }
})