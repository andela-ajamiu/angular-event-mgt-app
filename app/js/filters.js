'use strict';

eventsApp.filter('session_durations', function() {
    return function(duration) {
        switch (duration) {
            case 1:
                return "Half Hour";
            case 2:
                return "1 Hour";
            case 3:
                return "Half Day";
            case 4:
                return "Full Day";
        }
    }
});

eventsApp.filter('session_levels', function() {
    return function(level) {
        switch (level) {
            case "Introductory":
                return "Level: <i class='icon-volume-off icon-white'></i>";
            case "Intermediate":
                return "Level: <i class='icon-volume-down icon-white'></i>";
            case "Advanced":
                return "Level: <i class='icon-volume-up icon-white'></i>";
        }
    }
});