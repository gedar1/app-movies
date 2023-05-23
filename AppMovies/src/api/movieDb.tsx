import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'c0ff155e87d8282dea1721266fa05e86',
    language: 'es-ES',
  },
});

export default movieDB;
