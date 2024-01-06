import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { Movie } from "../../models/movie.interface";
import { MovieType } from "../../models/movie-type.enum";
import { MovieService } from "../../services/movie.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnChanges {

  constructor(private movieService: MovieService) { }

  title: string = 'MoviesComponent';

  public movies : Movie[] = [];

  public listOfMovies: Movie[] = [
    {
      name: "Captain America",
      mainChar: "Steve",
      rating: 7.5,
      releaseDate: new Date(),
      type: MovieType.Action
    },
    {
      name: "Spiderman",
      mainChar: "Peter Parker",
      rating: 8.5,
      releaseDate: new Date(2018, 11, 20),
      type: MovieType.Action
    },
    {
      name: "Guardiains of the Galaxy",
      mainChar: "Peter",
      rating: 6.5,
      releaseDate: new Date(2018, 8, 20),
      type: MovieType.Drama
    },
  ];

  public deleteMovie(movieIndex: number): void {
    this.listOfMovies.splice(movieIndex, 1);
  }

  ngOnInit(): void {
    this.movieService.setMovies(this.listOfMovies);
    console.log('movies', this.movieService.getMovies());
    this.movies = this.movieService.getMovies()
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}