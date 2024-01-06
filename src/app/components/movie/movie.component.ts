import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../models/movie.interface';
import { MovieType } from '../../models/movie-type.enum';

@Component({
  selector: 'app-movie',  
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  constructor() {}

  get movieTypeEnum() {
    return MovieType;
  }

  deleteMovie() : void{
    this.onDeleteMovie.emit(this.movieIndex);
  }

  @Input() movie: Movie | undefined;
  @Input() borderWidth: number | undefined;
  @Input() movieIndex: number | undefined; 
  @Output() onDeleteMovie: EventEmitter<number> = new EventEmitter<number>();
}
