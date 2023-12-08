import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/w300";

function MovieCard({movie}) {
  return (
    <>
        {movie.poster_path && <img src={IMAGE_BASE_URL+movie.poster_path} 
        className='w-[110px] md:w-[200px] rounded-lg
        hover:border-[3px] border-gray-400 cursor-pointer
        hover:scale-110 transition-all duration-150 ease-in ' loading="lazy"/>}
    </>
  )
}

export default MovieCard