eventsApp.controller('LocaleSampleController', function LocaleSampleController($scope, $locale, $timeout) {
    $scope.today = new Date();
    $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;

    var atimeout = $timeout(function () {
        $scope.name = "Emjay";
    }, 3000);

    $scope.cancel = function () {
        $timeout.cancel(atimeout)
    }

    throw {message: 'sample error'}
})