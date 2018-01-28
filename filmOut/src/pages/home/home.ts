import { Component } from '@angular/core';
import { NavController, IonicPage, App } from 'ionic-angular';
import { Api, Movie } from '../../providers';
import { MOVIE_DETAIL_PAGE } from "../pages.constants";

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	movies: Movie[];

	constructor(
    public navCtrl: NavController,
    public api: Api,
    public appCtrl: App
    ) {
		// En un constructor no se deben hacer cosas asíncronas
	}

	ionViewDidLoad() {
		// console.log('HomePage ionViewDidLoad');
		this.loadMoviesList();
	}

	ionViewDidEnter() {
		// console.log('HomePage ionViewDidEnter');
	}

	ionViewDidLeave() {
		// console.log('HomePage ionViewDidLeave');
	}

	ionViewDidUnload() {
		// console.log('HomePage ionViewDidUnload');
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

  gotoMoviedetail(movie) {
    this.navCtrl.push(MOVIE_DETAIL_PAGE, {
      movie: movie
    });
  }

  pruebaNav() {
    // Navega poniendo en la pila de páginas
    // this.navCtrl.push(MOVIE_DETAIL_PAGE);

    // Navega poniendo como la primera de la pila
    // this.navCtrl.setRoot(MOVIE_DETAIL_PAGE);

    // Navega poniendo en la pila del controlador global de navegación (rootNav)
    // this.appCtrl.getRootNav().push(MOVIE_DETAIL_PAGE);

    // Similar al anterior, pero no puede volver
    this.appCtrl.getRootNav().setRoot(MOVIE_DETAIL_PAGE);
  }

}
