import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';
import {RecipeService} from '../../../../services/recipe.service'
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe:any
  @Input() index:any
  // @Output() RecipeSelected=new EventEmitter()
  constructor(private RecipeService:RecipeService) {}
  ngOnInit(): void {}
  onSelect(){
  // this.RecipeSelected.emit(this.recipe)
  //  this.RecipeService.RecipeSelected.emit(this.recipe)
  }

}
