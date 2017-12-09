import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { HeaderComponent } from './header.component';
import { DisplayMovieComponent } from './display-movie.component';
import { SearchComponent } from './search/search.component';
import { MoviePreviewComponent } from './search/movie-preview.component';
import { FooterComponent } from './footer.component';
import { MovieService } from './movie.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayMovieComponent,
    SearchComponent,
    MoviePreviewComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
