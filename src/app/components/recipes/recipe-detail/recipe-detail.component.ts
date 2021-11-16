import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from 'src/app/models/Recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe:any
  recipe:any
   id:any
  constructor(private recipeService:RecipeService,private route:ActivatedRoute) { }
  ngOnInit(): void {
    // const id=this.route.snapshot.params['id']
    this.route.params.subscribe((params:Params)=>{
     this.id= +params['id']
     this.recipe=this.recipeService.getRecipe(this.id)
    })
  }

  onAddToShoppingList(){
   this.recipeService.AddIngredientToShoppingList(this.recipe.ingredients)
  }


}
