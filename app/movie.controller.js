(function() {
    'use strict';

    angular
    // define controller
        .module('movieNerd')
        .controller('movieController', movieController);
  /* @ngInject */
    movieController.$inject = ['movieServices'];
  
    function movieController(movieServices) {
        // declare variables
        var vm = this;
        vm.title = 'movieController';
        vm.movieList;
        vm.searchMovie;

        
// all variables
        activate();

        ////////////////

        function activate() {
        }


        /////////start coding here for controller
        vm.getMovie = function(searchMovie){
        	movieServices.getMovie(vm.searchMovie).then(
        		function(bringMyMovies){
                    //store bringMyMovies in a different variable to access it in html page
        			vm.movieList = bringMyMovies;
                    //console to check if i am getting a movie title
        			//console.log(vm.movieList[0].Title); /batman
        	});

        }
    }
})();
//-CW, EP, BS, VZ
