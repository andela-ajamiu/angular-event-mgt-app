'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute', 'ngCookies']).
                    config(function ($routeProvider, $locationProvider) {
                        $routeProvider.when('/newEvent', {
                            templateUrl: 'templates/NewEvent.html',
                            controller: 'EditEventController'
                        });
                        $routeProvider.when('/events', {
                            templateUrl: 'templates/EventList.html',
                            controller: 'EventListController',
                            resolve: {
                                events: function(eventData, $route) {
                                    return eventData.getAllEvents();
                                }
                            }
                        });
                        $routeProvider.when('/events/:id', {
                            templateUrl: 'templates/EventDetails.html',
                            controller: 'EventController',
                            resolve: {
                                event: function($route, eventData) {
                                    return eventData.getEvent($route.current.pathParams.id).$promise;
                                }
                            }
                        });
                        $routeProvider.when('/editProfile', {
                            templateUrl: 'templates/EditProfile.html',
                            controller: 'EditProfileController'
                        })
                        $routeProvider.when('/sampleDirective', {
                            templateUrl: 'templates/sampleDirective.html',
                            controller: 'SampleDirectiveController'
                        })
                        $routeProvider.when('/awe', {
                            template: 'awayuuuu!!!'
                        })
                        $routeProvider.otherwise({
                            redirectTo: '/events'
                        });
                        $locationProvider.html5Mode(true);
                    })