import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../Movie';

@Component({
  selector: 'movie-preview',
  templateUrl: './movie-preview.component.html',
  styles: []
})
export class MoviePreviewComponent implements OnInit {

    @Input() movie: Movie = {}
    @Input() index: number = 1

    constructor() { }

    ngOnInit() {
    }

    backdropStyle = () => ({
        'background':`linear-gradient(180deg, rgba(0,0,0,.7), transparent), url(${this.movie.backdropUrl})`,
        'background-size':'cover'
    })
    animationDelay = () => ({
        'animation-delay':`${this.index*.13}s`
    })
}
