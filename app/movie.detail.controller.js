(function() {
    'use strict';

    angular
        .module('movieNerd')
        .controller('MovieDetailController', MovieDetailController);

    MovieDetailController.$inject = ['movieServices', '$stateParams'];

    /* @ngInject */
    function MovieDetailController(movieServices, $stateParams) {
        var batman = this;
        var imdbID = $stateParams.movieDetailId;
   //    batman.result;
        activate();

        function activate() {
         //   console.log(imdbID);
            MovieDetail($stateParams.movieDetailId);
        }

console.log($stateParams.movieDetailId);
        /////////start coding here for controller
           function MovieDetail(imdbID){
           
        	movieServices.getMovieDetail(imdbID)
            .then(function(results){
               
                 batman.result= results;      
               // console.log(batman.result.Title);
        	});

        }
   }
})();

