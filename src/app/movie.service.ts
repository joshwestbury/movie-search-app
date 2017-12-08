import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Movie } from './Movie';

@Injectable()
export class MovieService {

    private selectedMovie$: Subject<Movie> = new Subject<Movie>()
    private apiKey:string = "d9b4dd4972ab72d0f3f2414e6d244c2f"


    constructor() { }

    get currentMovie() {
        return this.selectedMovie$
    }

    changeSelectedMovie(movie:Movie) {
        this.selectedMovie$.next(movie)
    }

}
