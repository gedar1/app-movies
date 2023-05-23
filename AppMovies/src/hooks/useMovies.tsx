import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import movieDB from '../api/movieDb';
import {IMovie, IMovieDBMoviesResponse} from '../interfaces/interfaceMovies';

interface IMoviesState {
  moviesNowPlaying: IMovie[];
  moviesPopular: IMovie[];
  moviesTopRated: IMovie[];
  moviesUpComing: IMovie[];
}
export const useMovies = () => {
  const [moviesState, setMoviesState] = useState<IMoviesState>();

  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const nowPlayingPromise =
      movieDB.get<IMovieDBMoviesResponse>('/now_playing');
    const popularPromise = movieDB.get<IMovieDBMoviesResponse>('/popular');
    const topRatedPromise = movieDB.get<IMovieDBMoviesResponse>('/top_rated');
    const upComingPromise = movieDB.get<IMovieDBMoviesResponse>('/upcoming');

    const respon = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upComingPromise,
    ]);

    setMoviesState({
      moviesNowPlaying: respon[0]?.data?.results ?? [],
      moviesPopular: respon[1].data.results ?? [],
      moviesTopRated: respon[2].data.results ?? [],
      moviesUpComing: respon[3].data.results ?? [],
    });

    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return {
    ...moviesState,
    loading,
  };
};
