eventsApp.controller('EventController', function EventController($scope, eventData, userData, $anchorScroll, $cookies) {
    eventData.getEvent().$promise.
        then(function (event) {
            $scope.event = event;
        }).
        catch(function (error) {
            console.log(error);
        });

    $scope.upVoteSession = function(session) {
        userData.getUser($cookies.get('user')).$promise.
            then(function (user) {
                var userSession = user.userName + '_' + session.name
                if (!$cookies.get(userSession)) {
                    session.voteCount++;
                    $cookies.put(userSession, session.voteCount )
                    user.votes = {}
                    user.votes[session.name] = session.voteCount;
                    // userData.updateVote(user).$promise.
                    //     then(function (userx) {
                    //         console.log('done', userx);
                    //     }).
                    //     catch(function (error) {
                    //         console.log(error);
                    //     });  

                    // var userx = userData.updateVote(user).$promise

                    console.log(user)
                    // console.log($cookies.get('user'))
                    // console.log($cookies.getAll())
                } else {
                    // $cookies.remove(userSession)
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