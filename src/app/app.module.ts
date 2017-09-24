import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Bootstrap } from 'bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MovieService } from './movie/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
       RouterModule.forRoot([
      {
        path: '',
        component: MovieComponent
      }
    ]),
       Ng2SmartTableModule,
       FormsModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
