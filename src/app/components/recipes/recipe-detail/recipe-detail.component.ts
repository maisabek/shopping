import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  constructor(private recipeService:RecipeService,
              private activatedRoute:ActivatedRoute,
              private router:Router) { }
  ngOnInit(): void {
    // const id=this.route.snapshot.params['id']
    this.activatedRoute.params.subscribe((params:Params)=>{
     this.id= +params['id']
     this.recipe=this.recipeService.getRecipe(this.id)
    })
  }

  onAddToShoppingList(){
   this.recipeService.AddIngredientToShoppingList(this.recipe.ingredients)
  }
  onRecipeEdit(){
  //  this.router.navigate(['edit'],{relativeTo:this.activatedRoute})
  this.router.navigate(['../',this.id,'edit'],{relativeTo:this.activatedRoute})
  }


}
