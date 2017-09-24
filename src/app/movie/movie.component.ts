import { Component, OnInit } from '@angular/core';
import { MovieService} from './movie.service';
// import { MovieModel} from './movie.model';
@Component({
  selector: 'movies',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

movies :any[];
originalMovies : any[];
  
 showHide: false;

movie={"title":"","director":"","actors":""};

  constructor(private moviesService:MovieService) {
    	this.moviesService.loadMovies().subscribe(movies=>{this.movies=movies;this.originalMovies=movies});
 }

  ngOnInit() {
  }
  search(searchEvent){
    let term = searchEvent;
    if (term.trim() === '' || term.trim().length < 2) {
    	this.movies=this.originalMovies;
    }else{
    	  	this.moviesService.searchMovies(searchEvent).subscribe(movies=>this.movies=movies);
    }
  }

   addMovie(movie) {
    this.moviesService.addMovie(this.movie).then((result) => {    }, (err) => {
      console.log(err);
    });
  }
}
