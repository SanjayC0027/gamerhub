import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
//property
individualDetails:any=[]

  constructor(public apiService:ServicesService) { }

  ngOnInit(): void {
    this.apiService.getDetails()
    .subscribe((result)=>{
      this.individualDetails=result
      console.log(this.individualDetails);
      
    })
  }

}
