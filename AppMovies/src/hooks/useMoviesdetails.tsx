import React, {useEffect, useState} from 'react';
import {MovieFull} from '../interfaces/interfaceMovies';
import movieDB from '../api/movieDb';
import {Cast, CreditInterface} from '../interfaces/CreditInterface';

interface IMOvieDetails {
  movieDetails?: MovieFull;
  isLoading: boolean;
  cast: Cast[];
}
const useMoviesdetails = (movieId: number) => {
  const [state, setState] = useState<IMOvieDetails>({
    isLoading: true,
    movieDetails: undefined,
    cast: [],
  });

  const getMovieFull = async () => {
    const respDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
    const respCastPromise = await movieDB.get<CreditInterface>(
      `/${movieId}/credits`,
    );
    const [detailsResponse, castResponse] = await Promise.all([
      respDetailsPromise,
      respCastPromise,
    ]);
    setState({
      isLoading: false,
      movieDetails: detailsResponse.data,
      cast: castResponse.data.cast,
    });
  };

  useEffect(() => {
    getMovieFull();
  }, []);

  return {
    ...state,
  };
};

export default useMoviesdetails;
