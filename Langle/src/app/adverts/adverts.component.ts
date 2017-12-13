import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.css']
})
export class AdvertsComponent implements OnInit {

  results: any;

  public title = 'L\'Angle Cool';

  constructor(private http: HttpClient) {
  }

  ngOnInit():any {
    this.http.get('http://localhost:8000/api/adverts/all').subscribe(data=>{
      this.results = data;
      console.log(this.results);
    })
  }

}
