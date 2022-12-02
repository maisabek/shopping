import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
   id:any
   editMode=false
  ngOnInit(): void {
    this.route.params.subscribe((id:Params)=>{
     this.id=+id['id']
     this.editMode=id['id'] != null
    })
  }

}
