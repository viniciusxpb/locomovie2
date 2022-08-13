angular
    .module('ngLocoMovie')
    .controller('movieController',function($scope, $location, movieFactory){
        $scope.hello = "Olá mundo lindo";

        var url = $location.path().split('/');
        debugger;


        movieFactory.getMovies().then(function(data){
            $scope.movies = data.data.results;
        });

        $scope.getImagePath = function(movie) {
            return "https://image.tmdb.org/t/p/original"+movie.backdrop_path;
        }

    }).controller('PageController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
		$http.get('data/pages.json').success(function(data){
			$scope.page = data[$routeParams.id];
		});
		
	}])