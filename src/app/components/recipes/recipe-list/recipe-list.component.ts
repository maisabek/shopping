import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/models/Recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor(public recipeService:RecipeService,
              private router:Router,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {}

  // @Output() recipeWasSelected=new EventEmitter()
  // onRecipeSelected(recipe:Recipe){
  //  this.recipeWasSelected.emit(recipe)
  //  console.log("recipe ",recipe)
  // }
  onNewRecipe(){
   this.router.navigate(['new'],{relativeTo:this.activatedRoute})
  }
}
