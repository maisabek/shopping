import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {}
 @Output() feaureSelected=new EventEmitter<string>()
  onSelect(feature:string){
   this.feaureSelected.emit(feature)
  }

}
