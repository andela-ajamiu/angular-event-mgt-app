eventsApp.controller('FilterSampleController', function ($scope, $filter, $cookieStore) {
    $scope.data = {};
    var durations = $filter('session_durations')
    $scope.data.duration1 = durations(1);
    $scope.data.duration2 = durations(2);
    $scope.data.duration3 = durations(3);
    $scope.data.duration4 = durations(4);

    $scope.event = {name: "LOR", month: "jan"};

    $scope.saveEventToCookie = function (data) {
        $cookieStore.put('durations', data);
    }

    $scope.getEventFromCookie = function () {
        console.log($cookieStore.get('durations'))
    }

    $scope.removeEventFromCookie = function () {
        $cookieStore.remove('durations')
    }
})