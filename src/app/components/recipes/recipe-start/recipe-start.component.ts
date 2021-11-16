import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.scss']
})
export class RecipeStartComponent implements OnInit {
  SelectedRecipe:any
  constructor(private RecipeService:RecipeService) { }

  ngOnInit(): void {
    this.RecipeService.RecipeSelected.subscribe((recipe)=>{
      this.SelectedRecipe=recipe
      console.log("this.SelectedRecipe = ",this.SelectedRecipe)
    })
  }

}
