import { Component } from '@angular/core';
import { data } from './mock-data'
import { Movie } from './Movie'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    currentMovie:Movie = data[0]
}
