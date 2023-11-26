import React from "react";
import { genreList } from "../Constant/GenreList";
import MovieList from "./MovieList";

const GenreMovieList = () => {
  return (
    <div>
      {genreList.slice(0,5).map((genre, index) => {
        return <div className='p-8 px-8 md:px-16'>
          <h2 className='text-[20px]
           text-white font-bold'>{genre.name}</h2>
           <MovieList genreId={genre.id} index_={index} />
        </div>
      })}
    </div>
  );
};

export default GenreMovieList;
