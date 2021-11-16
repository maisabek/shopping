import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor(public recipeService:RecipeService){}
  ngOnInit(): void {}

  // @Output() recipeWasSelected=new EventEmitter()
  // onRecipeSelected(recipe:Recipe){
  //  this.recipeWasSelected.emit(recipe)
  //  console.log("recipe ",recipe)
  // }
}
