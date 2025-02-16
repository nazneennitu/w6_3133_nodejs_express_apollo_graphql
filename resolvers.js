const { v4: uuidv4 } = require('uuid');

let movies = [
  { id: "1", name: "Inception", director_name: "Nazneen Akter Nitu", production_house: "Nazneen", release_date: "2025-02-16", rating: 8.8 },
  { id: "2", name: "Interstellar", director_name: "Nazneen", production_house: "Paramount", release_date: "2025-02-07", rating: 8.6 }
];

const resolvers = {
  Query: {
    getAllMovies: () => movies,
    getMovieById: (_, { id }) => movies.find(movie => movie.id === id),
  },

  Mutation: {
    addMovie: (_, { name, director_name, production_house, release_date, rating }) => {
      const newMovie = { id: uuidv4(), name, director_name, production_house, release_date, rating };
      movies.push(newMovie);
      return newMovie;
    },

    updateMovie: (_, { id, name, director_name, production_house, release_date, rating }) => {
      const movieIndex = movies.findIndex(movie => movie.id === id);
      if (movieIndex === -1) throw new Error("Movie not found");

      movies[movieIndex] = { ...movies[movieIndex], name, director_name, production_house, release_date, rating };
      return movies[movieIndex];
    },

    deleteMovie: (_, { id }) => {
      const movieIndex = movies.findIndex(movie => movie.id === id);
      if (movieIndex === -1) throw new Error("Movie not found");

      movies.splice(movieIndex, 1);
      return "Movie deleted successfully";
    }
  }
};

module.exports = resolvers;
