// 1. Create a watchlist collection and insert one movie
db.watchlist.insertOne({
  movie_id: "MV001",
  title: "Inception",
  genre: "Action",
  release_year: 2010,
  imdb_rating: 8.8,
  watched: true
});

// 2. Insert 5 movies with different genres
db.watchlist.insertMany([
  { movie_id: "MV002", title: "Interstellar", genre: "Adventure", release_year: 2014, imdb_rating: 8.6, watched: false },
  { movie_id: "MV003", title: "Schindler's List", genre: "Drama", release_year: 1993, imdb_rating: 9.0, watched: true },
  { movie_id: "MV004", title: "Coco", genre: "Family", release_year: 2017, imdb_rating: 8.4, watched: false },
  { movie_id: "MV005", title: "Joker", genre: "Psychological", release_year: 2019, imdb_rating: 8.4, watched: true },
  { movie_id: "MV006", title: "Gone Girl", genre: "Suspense", release_year: 2014, imdb_rating: 8.1, watched: false }
]);

// 3. Retrieve all movies where watched is false
db.watchlist.find({ watched: false });

// 4. Display only title, genre, and imdb_rating
db.watchlist.find({}, { title: 1, genre: 1, imdb_rating: 1, _id: 0 });

// 5. Delete a movie based on movie_id
db.watchlist.deleteOne({ movie_id: "MV001" });

