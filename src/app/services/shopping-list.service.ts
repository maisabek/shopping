import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  // ingredientsChanged=new EventEmitter<Ingredient[]>()
  ingredientsChanged=new Subject<Ingredient[]>()

  Ingredients:Ingredient[]=[
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10)
  ]
  constructor() { }
  getIngredients(){
    return this.Ingredients.slice()
  }
  addIngredient(ingredient:Ingredient){
    this.Ingredients.push(ingredient)
    // this.ingredientsChanged.emit(this.Ingredients.slice())
    this.ingredientsChanged.next(this.Ingredients.slice())

  }

  addIngredients(ingredients:Ingredient[]){
    this.Ingredients.push(...ingredients)
    // this.ingredientsChanged.emit(this.Ingredients.slice())
    this.ingredientsChanged.next(this.Ingredients.slice())

  }
}
