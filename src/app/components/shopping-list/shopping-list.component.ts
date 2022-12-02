import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  Ingredients:Ingredient[]=[];
  private igChangeSub:any
  constructor(private _ShoppingListService:ShoppingListService){}

  ngOnInit(): void{
   this.Ingredients=this._ShoppingListService.getIngredients()
  this.igChangeSub=this._ShoppingListService.ingredientsChanged.subscribe((ingredient:Ingredient[])=>{
     this.Ingredients=ingredient
   })
  }
  ngOnDestroy(){
    this.igChangeSub.unsubscribe()
  }

  // onIngredientAdded(ingredient:Ingredient){
  //  this.Ingredients.push(ingredient)
  // }

}
