angular
    .module('ngLocoMovie')
    .factory('movieFactory',function($http){
        function getMovies(pageNumber){
            return $http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=acc9454d769bbd4b4f75591b0fa9be19&language=pt-BR&page=${pageNumber}`);
        }

        function getMovieInfo(id){
            return $http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=acc9454d769bbd4b4f75591b0fa9be19&language=pt-BR`);
        }

        return {
            getMovies: getMovies,
            getMovieInfo: getMovieInfo
        }

    });