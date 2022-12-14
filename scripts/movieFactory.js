angular
    .module('ngLocoMovie')
    .factory('movieFactory',function($http){
        function getMovies(pageNumber){
            return $http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=acc9454d769bbd4b4f75591b0fa9be19&language=pt-BR&page=${pageNumber}`);
        }

        function getMovieInfo(id){
            return $http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=acc9454d769bbd4b4f75591b0fa9be19&language=pt-BR`);
        }

        function getMovieCast(id){
            return $http.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=acc9454d769bbd4b4f75591b0fa9be19&language=pt-BR`);
        }

        function getSimilarMovies(id){
            return $http.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=acc9454d769bbd4b4f75591b0fa9be19&language=pt-BR&page=1`);
        }


        return {
            getMovies: getMovies,
            getMovieInfo: getMovieInfo,
            getMovieCast: getMovieCast,
            getSimilarMovies: getSimilarMovies
        }
    });