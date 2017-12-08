import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../Movie';

@Component({
  selector: 'movie-preview',
  templateUrl: './movie-preview.component.html',
  styles: []
})
export class MoviePreviewComponent implements OnInit {

    @Input() movie: Movie = {}
    constructor() { }

    ngOnInit() {
    }

}
