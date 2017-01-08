eventsApp.controller('EventController', function EventController($scope, eventData, $anchorScroll, $cookieStore) {
    eventData.getEvent().$promise.
        then(function (event) {
            $scope.event = event;
        }).
        catch(function (error) {
            console.log(error);
        });

    $scope.upVoteSession = function(session) {
        eventData.getUser('emjay').$promise.
            then(function (user) {
                if (!$cookieStore.get(session.name)) {
                    session.voteCount++;
                    $cookieStore.put(session.name, session.voteCount)
                    console.log($cookieStore.get(user.userName))
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