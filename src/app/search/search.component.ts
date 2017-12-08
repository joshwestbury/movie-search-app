import { Component, OnInit } from '@angular/core';
import { data } from '../mock-data';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service'

@Component({
  selector: 'search-movie',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

    searchResults: Movie[] = data

    constructor(private movieService:MovieService) { }


    ngOnInit() {
    }

    setCurrentMovie(movie:Movie) {
        this.movieService.changeSelectedMovie(movie)
    }

}
