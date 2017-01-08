eventsApp.controller('CompileSampleController', function CompileSampleController($scope, $compile, $parse) {

    var func = $parse('1 + 2')
    console.log(func());

    var getit = $parse('dude.name');
    var dude1 = {dude: {name: "Emjay"}}
    var dude2 = {dude: {name: "User"}}
    console.log(getit(dude1))
    console.log(getit(dude2))
    console.log(getit(dude1, dude2))

    var setit = getit.assign;
    setit(dude2, "Another")
    console.log(dude2.dude.name)

    $scope.appendToSpace = function (markup) {
        return $compile(markup) ($scope).appendTo(angular.element('#appendSpace'));
    }
})