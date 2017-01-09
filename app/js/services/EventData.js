eventsApp.factory('eventData', function($resource) {
    return {
        getEvent: function(eventId) {
            return $resource('/data/event/:id' + '.json', {id: '@id'}).get({id:eventId})
        },

        saveEv: function(event) {
            return $resource('/data/event/').save(event)
        },

        getAllEvents: function () {
            return $resource('/data/event/').query()
        }  
    }
})