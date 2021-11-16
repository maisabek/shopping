import { Component, OnInit } from '@angular/core';
import { LoadingIndectorService } from 'src/app/services/Indector/loading-indector.service';

@Component({
  selector: 'app-loading-indector',
  templateUrl: './loading-indector.component.html',
  styleUrls: ['./loading-indector.component.scss']
})
export class LoadingIndectorComponent implements OnInit {

  constructor(private readonly loadingIndicatorService: LoadingIndectorService) {
   this.LoadingStatus()

  }
  ngOnInit(){}
  
  status:any
  LoadingStatus(){
    this.loadingIndicatorService.loading$.subscribe((res:any)=>{
      this.status=res
     })
  }

}
