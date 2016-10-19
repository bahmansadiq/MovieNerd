(function() {
    'use strict';

    angular
        .module('movieNerd')
        .service('movieServices', movieServices);

    movieServices.$inject = ['$http'];

    /* @ngInject */
    function movieServices($http) {
        // declare  the functions
        this.getMovie = getMovie;
        this.getMovieDetail = getMovieDetail;

        // variables
        var movieName='';
        var movieID='';
        // fucntion to get data from API
        function getMovie(movieName) {
        	return $http({
        		method: 'GET',
        		url: 'http://www.omdbapi.com/',
        		params:{
        			APIKEY : 'f19cfdb9',
        			s : movieName 
        		}

        	}).then(function(myMovies){
        //		console.log(myMovies.data.Search[0]);
        		return myMovies.data.Search;
        	});
        }
    // fucntion to get data from API
        function getMovieDetail(movieDetailId) {
            return $http({
                method: 'GET',
                url: 'http://www.omdbapi.com/',
                params:{
                    APIKEY : 'f19cfdb9',
                    i : movieDetailId 
                }

            }).then(function(myMovieDetail){
      //         console.log(myMovieDetail.data);
                return myMovieDetail.data;
            });
        }
    }
})();
//-CW, EP, BS, VZ
