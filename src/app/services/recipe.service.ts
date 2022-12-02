import {Injectable, Output,EventEmitter} from '@angular/core'
import { Ingredient } from '../models/ingredient.model'
import { Recipe } from '../models/Recipe'
import { ShoppingListService } from './shopping-list.service'
import {Subject} from 'rxjs';
@Injectable()
export class RecipeService{
  // RecipeSelected=new EventEmitter<Recipe>()
  RecipeSelected=new Subject<Recipe>()

constructor(private _ShoppingListService:ShoppingListService){}
  private recipes:Recipe[] = [
    new Recipe("A Test Recipe 1","This is simply a test","assets/Images/07.jpg",
    [new Ingredient("Meat",1),new Ingredient("French Fries",2)]
    ),
    new Recipe("A Test Recipe 2","This is simply a test","assets/Images/01.jpg",
    [new Ingredient("Buns",1),new Ingredient("Fries",2)]
    ),
    new Recipe("A Test Recipe 3","This is simply a test","assets/Images/08.jpg",
    [new Ingredient("Buns",1),new Ingredient("Fries",2)]
    ),
    new Recipe("A Test Recipe 4","This is simply a test","assets/Images/03.jpg",
    [new Ingredient("Buns",1),new Ingredient("Fries",2)]
    ),
    new Recipe("A Test Recipe 5","This is simply a test","assets/Images/bg.jpg",
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
