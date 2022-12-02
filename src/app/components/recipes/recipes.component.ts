import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
   SelectedRecipe:any
  constructor(private RecipeService:RecipeService) { }

  ngOnInit(): void {
    // this.RecipeService.RecipeSelected.subscribe((recipe)=>{
    //   this.SelectedRecipe=recipe
    //   console.log("this.SelectedRecipe = ",this.SelectedRecipe)
    // })
  }


}
