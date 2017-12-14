import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Adverts } from "../../classes/adverts";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

//TODO ajouter un select avec les catégories --> ajouter les clés étrangeres

@Component({
  selector: 'app-new-advert',
  templateUrl: './new-advert.component.html',
  styleUrls: ['./new-advert.component.css']
})
export class NewAdvertComponent implements OnInit {

  //TODO initialiser le is_active a true

  private submitted = false;
  adverts: any;
  categories: any;
  locations: any;
  users: any;
  results: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): any {
    this.getSelects(this.route.snapshot.params['id']);
  }

  getSelects(id): any {
    let url = 'http://localhost:8000/api/adverts/new/' + id;
    this.http.get(url)
      .subscribe(data => {
        this.categories = data["categories"];
        this.locations = data["locations"];
        console.log(this.locations, this.categories)
      })
  }

  onSubmit() {
    this.submitted = true;
  }


}
