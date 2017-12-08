import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime'

@Component({
  selector: 'search-movie',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

    searchResults: Movie[] = []
    search$:Subject<string> = new Subject<string>()
    fetching:boolean = false
    search:string = ""

    constructor(private movieService:MovieService) { }


    ngOnInit() {
        this.search$
            .debounceTime(500)
            .map(query => {
                this.fetching = true
                return query
            })
            .subscribe(this.searchQuery.bind(this))
    }

    searchQuery(query:string) {
        if(query.length > 0)  {
            this.movieService.searchMovie(query)
                                          .subscribe((results) => {
                                              this.fetching = false
                                              this.searchResults = results
                                          })
        } else {
            this.fetching = false
            this.searchResults = []
        }


    }

    setCurrentMovie(movie:Movie) {
        this.movieService.changeSelectedMovie(movie)
    }

}
