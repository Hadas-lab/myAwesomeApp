import { Component } from '@angular/core';

export interface Movie {
  name: string;
  mainChar: string;
  rating: number;
}

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  constructor() {}

  public movie: Movie = {
    name: 'Iron man',
    mainChar: 'Tony Stark',
    rating: 8.2
  }
}
