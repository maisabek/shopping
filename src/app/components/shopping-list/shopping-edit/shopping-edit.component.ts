import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
   @ViewChild('name') nameRef:any
   @ViewChild('amount') amountRef:any
  //  @Output() IngredientAdded=new EventEmitter<Ingredient>()

  constructor(private _ShoppingListService:ShoppingListService) {}
  ngOnInit(): void {}

  onAddItem(){
    const newIngredient=
    new Ingredient(this.nameRef.nativeElement.value,this.amountRef.nativeElement.value)
    // this.IngredientAdded.emit(newIngredient)
    this._ShoppingListService.addIngredient(newIngredient)

  }

}
