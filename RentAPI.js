class Movie {
  constructor(title, genre, availableCopies) {
    this.title = title;
    this.genre = genre;
    this.availableCopies = availableCopies;
  }

  rentMovie() {
    if (this.availableCopies > 0) {
      this.availableCopies--;
      return true;
    } else {
      console.log(`Sorry, ${this.title} is currently out of stock.`);
      return false;
    }
  }

  returnMovie() {
    this.availableCopies++;
    console.log(`Thank you for returning ${this.title}.`);
  }
}

class RentalService {
  constructor() {
    this.movies = [];
  }

  addMovie(movie) {
    this.movies.push(movie);
  }

  rentMovie(title) {
    const movie = this.findMovie(title);

    if (movie) {
      const success = movie.rentMovie();
      if (success) {
        console.log(`Enjoy watching ${title}!`);
      }
    } else {
      console.log(`${title} not found in the rental service.`);
    }
  }

  returnMovie(title) {
    const movie = this.findMovie(title);

    if (movie) {
      movie.returnMovie();
    } else {
      console.log(`${title} not found in the rental service.`);
    }
  }

  findMovie(title) {
    return this.movies.find((movie) => movie.title === title);
  }
}

const movie1 = new Movie("The Shawshank Redemption", "Drama", 5);
const movie2 = new Movie("Inception", "Sci-Fi", 3);

const rentalService = new RentalService();
rentalService.addMovie(movie1);
rentalService.addMovie(movie2);

rentalService.rentMovie("Inception");
rentalService.rentMovie("The Shawshank Redemption");
rentalService.rentMovie("The Dark Knight");

rentalService.returnMovie("Inception");
rentalService.returnMovie("The Dark Knight");
