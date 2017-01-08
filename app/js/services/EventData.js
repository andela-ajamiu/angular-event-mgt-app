eventsApp.factory('eventData', function($resource) {
    return {
        getEvent: function() {
            return $resource('/data/event/:id' + '.json', {id: '@id'}).get({id:1})
        },

        saveEv: function(event) {
            return $resource('/data/event/').save(event)
        }      
    }
})