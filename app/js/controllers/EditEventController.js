eventsApp.controller("EditEventController", function EditEventController($scope, eventData) {
    $scope.saveEvent = function(event, newEvent) {
        if (newEvent.$valid) {
            eventData.saveEv(event).$promise.
                then(function (event) {
                    console.log('success', event);
                }).
                catch(function (error) {
                    console.log('failure', error)
                })
        }
    };

    $scope.cancelEdit = function() {
        return window.location = "/EventDetails.html";
    }
});