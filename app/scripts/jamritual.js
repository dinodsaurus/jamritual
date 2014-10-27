'use strict';

angular.module('jamritual', ['ngAnimate', 'ngTouch', 'ui.router', 'duScroll', 'cfp.loadingBar', 'angular-google-analytics', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider, AnalyticsProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'partials/about.html',
        controller: 'AboutCtrl'
      })
      .state('shows', {
        url: '/shows',
        templateUrl: 'partials/shows.html',
        controller: 'ShowsCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'partials/contact.html',
        controller: 'ContactCtrl'
      });
    $urlRouterProvider.otherwise('/');

    // initial configuration
    AnalyticsProvider.setAccount('UA-31219245-8');

    // track all routes (or not)
    AnalyticsProvider.trackPages(true);

    // Use analytics.js instead of ga.js
    AnalyticsProvider.useAnalytics(true);

    // change page event name
    AnalyticsProvider.setPageEvent('$stateChangeSuccess');
  })
  .run(function(Analytics) {
    // In case you are relying on automatic page tracking, you need to inject Analytics
    // at least once in your application (for example in the main run() block)
  });
