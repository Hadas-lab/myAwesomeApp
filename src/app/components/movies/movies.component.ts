import { Component, OnInit, OnChanges, SimpleChange, Input, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnChanges {

  title : string = 'MoviesComponent';
  @Input() listOfMovies: string[] = [];

  ngOnInit(): void {
    console.log('from ngOnInit');
    console.log('this.listOfMovies');
    console.log(this.listOfMovies);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('from ngOnCahnges');
  }
}