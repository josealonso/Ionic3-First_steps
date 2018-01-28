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
		// En un constructor no se deben hacer cosas asíncronas
	}

	ionViewDidLoad() {
		console.log('HomePage ionViewDidLoad');
		this.loadMoviesList();
	}

	ionViewDidEnter() {
		console.log('HomePage ionViewDidEnter');
	}

	ionViewDidLeave() {
		console.log('HomePage ionViewDidLeave');
	}

	ionViewDidUnload() {
		console.log('HomePage ionViewDidUnload');
	}

	loadMoviesList() {
		const $movies = this.api.getMovies();
		$movies.subscribe((movies) => {
			this.movies = movies;
			console.log('movies', movies);
		});
    return $movies;
	}

	doRefresh(event) {
		this.loadMoviesList().subscribe((movies) => {
			event.complete();
		});
	}

}
