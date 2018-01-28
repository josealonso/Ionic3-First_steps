import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Api, Movie } from '../../providers';

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	
  movies: Movie[];

	constructor(public navCtrl: NavController, public api: Api) {

  }

  pruebaList() {
    this.api.getMovies().subscribe(movies => {
      this.movies = movies;
      console.log('movies', movies);
    });
  }

}

