eventsApp.factory('$exceptionHandler', function () {
    return function (exception) {
        console.log("exception message: " + exception.message)
    }
})