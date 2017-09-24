import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
	
	constructor(private http : Http ){ }
	
	loadMovies(){
		return this.http.get('http://localhost:3000/movies/')
		.map(res=>res.json());
	}
	searchMovies(search){
		return this.http.get('http://localhost:3000/movies/search/'+search).map(res=>res.json());
	}
	addMovie(movie){
return new Promise((resolve, reject) => {
        this.http.post('http://localhost:3000/movies', movie)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });	}
}