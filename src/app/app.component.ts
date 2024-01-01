import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myAwesomeApp';
  shouldDisplayMovie: boolean = true;

  toggleMovieComponent(){
    this.shouldDisplayMovie = !this.shouldDisplayMovie;
  }
}
