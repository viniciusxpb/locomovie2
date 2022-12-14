angular
    .module('ngLocoMovie')
    .controller('movieController',function($scope, movieFactory, $routeParams){
        
        window.scrollTo(0,0);

        $scope.pageN = 1;
        $scope.loading = true;

        $scope.nextDisabled = true;
        $scope.totalPages = 0;

        if($routeParams.page){
            $scope.pageN = parseInt($routeParams.page);
        }
        movieFactory.getMovies($scope.pageN).then(function(data){
            $scope.totalPages = data.data.total_pages;
            $scope.movies = data.data.results;

            //previousDisabled & previousN
            if($scope.pageN==1){
                $scope.previousDisabled = true;
            }else{
                $scope.previousDisabled = false;
                $scope.previousN = $scope.pageN-1;
            }

            //nextDisabled & nextN
            if($scope.pageN==$scope.totalPages){
                $scope.nextDisabled = true;
            }else{
                $scope.nextDisabled = false;
                $scope.nextN = $scope.pageN+1;
            }
            $scope.loading = false;
        });

        $scope.getImagePath = function(movie) {
            return "https://image.tmdb.org/t/p/original"+movie.backdrop_path;
        }

        $scope.getPosterPath = function(movie) {
            return "https://image.tmdb.org/t/p/original"+movie.poster_path;
        }

    })
    .controller('movieInfo', ['$scope', 'movieFactory', '$routeParams', '$http', function($scope, movieFactory, $routeParams){
        $scope.movieLoading = true;
        $scope.similarLoading = true;
        movieFactory.getMovieInfo($routeParams.id).then(function(data){
            $scope.movieInfo = data.data;
            $scope.movieLoading = false;
        });

        movieFactory.getMovieCast($routeParams.id).then(function(data){
            $scope.directors = data.data.crew.filter(({job})=> job ==='Director');
            $scope.writers = data.data.crew.filter(({job})=> job ==='Writer');
        });

        movieFactory.getSimilarMovies($routeParams.id).then(function(data){
            $scope.similar_movies = data.data.results.slice(0, 4);
            $scope.similarLoading = false;
        });
	}])