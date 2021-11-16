import {Injectable, Output,EventEmitter} from '@angular/core'
import { Ingredient } from '../models/ingredient.model'
import { Recipe } from '../models/Recipe'
import { ShoppingListService } from './shopping-list.service'

@Injectable()
export class RecipeService{
constructor(private _ShoppingListService:ShoppingListService){}
  RecipeSelected=new EventEmitter<Recipe>()
  private recipes:Recipe[] = [
    new Recipe("A Test Recipe 1","This is simply a test","assets/Images/01.jpg",
    [new Ingredient("Meat",1),new Ingredient("French Fries",2)]
    ),
    new Recipe("A Test Recipe 2","This is simply a test","assets/Images/03.jpg",
    [new Ingredient("Buns",1),new Ingredient("Fries",2)]
    )
  ]

  getRecipes(){
// recipes هترجع اراى جديدة كوبى من اللى فوق يعنى كل ماينادى على الفنكشن دى هياخد كوبى من الاراى
    return this.recipes.slice()
  }
  getRecipe(id:number){
   return this.recipes[id]
  }
  AddIngredientToShoppingList(ingredient:Ingredient[]){
    this._ShoppingListService.addIngredients(ingredient)
  }

}
