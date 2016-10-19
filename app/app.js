(function() {
    'use strict';

    var movieNerd = angular
        .module('movieNerd', ['ui.router']
        );


      movieNerd.config(function($stateProvider, $urlRouterProvider){

      		$urlRouterProvider.otherwise("/movie");
      		$stateProvider   
      		.state('movie', {
                url: "/movie",
                templateUrl: "app/partials/movie.html",
                controller: 'movieController',
                controllerAs: 'vm'
            })
            .state('movieDetails', {
                url: "/movieDetails/:movieDetailId",
                templateUrl: "app/partials/movie.details.html",
                controller: 'MovieDetailController',
                controllerAs: 'batman'
            });
      });


})();
//-CW, EP, BS, VZ
