import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Movie } from './Movie';

@Injectable()
export class MovieService {

    private selectedMovie$: Subject<Movie> = new Subject<Movie>()
    constructor() { }

    get currentMovie() {
        return this.selectedMovie$
    }

    changeSelectedMovie(movie:Movie) {
        this.selectedMovie$.next(movie)
    }

}
