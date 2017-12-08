import { Component, OnInit, Input } from '@angular/core';
import { Movie } from './Movie'

@Component({
  selector: 'display-movie',
  templateUrl: './display-movie.component.html',
  styles: []
})
export class DisplayMovieComponent implements OnInit {

    @Input() movie:Movie
    constructor() { }

    ngOnInit() {
    }

    getPosterUrl(path:string) {
        return "http://cdn.collider.com/wp-content/uploads/Iron-Man-3-poster-1.jpg"
    }

}
