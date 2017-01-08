eventsApp.controller('EventController', function EventController($scope, eventData, userData, $anchorScroll, $cookies) {
    eventData.getEvent().$promise.
        then(function (event) {
            $scope.event = event;
        }).
        catch(function (error) {
            console.log(error);
        });

    $scope.upVoteSession = function(session) {
        userData.getUser('emjay').$promise.
            then(function (user) {
                var userSession = user.userName + '_' + session.name
                if (!$cookies.get(userSession)) {
                    session.voteCount++;
                    $cookies.put(userSession, session.voteCount )
                    console.log($cookies.get(userSession))
                    console.log($cookies.getAll())
                } else {
                    alert('you already voted!')
                }
            }).
            catch(function (error) {
                alert('user does not exist')
            })
    };
    
    $scope.downVoteSession = function(session) {
        session.voteCount--;
    };

    $scope.sortorder = "name";

    $scope.limit = "3";

    $scope.sessionScroll = function () {
        $anchorScroll();
    }
});