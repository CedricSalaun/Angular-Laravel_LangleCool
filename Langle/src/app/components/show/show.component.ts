import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-show',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit{

    advert: any;
    categories: any;
    locations: any;
    users: any;
    result: any = {};

    constructor(private http: HttpClient, private route: ActivatedRoute){
    }

    ngOnInit(): any{
        this.getAdvert(this.route.snapshot.params['id']);
    }

    getAdvert(id){
        let url = "http://localhost:8000/api/adverts/" + id;
        this.http.get(url).subscribe(data =>{
            this.users = data["users"];
            this.categories = data["categories"];
            this.locations = data["locations"];
            this.advert = data["adverts"];

          for(let i = 0; i < this.categories.length; i++){
            if(this.categories[i].id == this.advert.category_id){
              this.result.category = this.categories[i].name;
            }
          }
          for(let i = 0; i < this.locations.length; i++){
            if(this.locations[i].id == this.advert.location_id){
              this.result.location = this.locations[i].name;
            }
          }
          for(let i = 0; i < this.users.length; i++){
            if(this.users[i].id == this.advert.user_id){
              this.result.user = this.users[i].name;
            }
          }
          this.result.advert = this.advert;
        });
    }

}
