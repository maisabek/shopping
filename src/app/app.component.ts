import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'courses';
  constructor(){}
  loadedFeature="recipe"
  onNavigate(feature:string){
   this.loadedFeature=feature
  }
}
