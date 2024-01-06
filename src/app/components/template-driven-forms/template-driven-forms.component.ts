import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})

export class TemplateDrivenFormsComponent implements OnInit, AfterViewInit {

  constructor(private movieService: MovieService) { }

  @ViewChild('f') form: any;

  public langs: Array<string> = [
    'English',
    'Hebrew',
    'Franch'
  ];

  public onSubmitForm(): void {
    console.log('Our Form', this.form);
  }

  ngOnInit(): void {
    console.log('random number (form)', this.movieService.random);
  }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
}
