import  axios from "axios";

const movieBaseUrl = "http://api.themoviedb.org/3";
const api_key = "a81ff1d22cf8d66caf7b445c13fac833";

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=a81ff1d22cf8d66caf7b445c13fac833';


const trendingVideoURL = movieBaseUrl + 
"/trending/all/day?api_key=" + api_key;

const getTrendingVideos = async () => {
    return await axios.get(trendingVideoURL);
}

const getMovieByGenreId = async (id) => {
    return await axios.get(movieByGenreBaseURL + '&with_genres='+id)
}

export {getTrendingVideos, getMovieByGenreId};
