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

    constructor(private http: HttpClient, private route: ActivatedRoute){
    }

    ngOnInit(): any{
        this.getAdvert(this.route.snapshot.params['id']);
    }

    getAdvert(id){
        let url = "http://localhost:8000/api/adverts/" + id;
        this.http.get(url).subscribe(data =>{
            this.users = data.users;
            this.categories = data.categories;
            this.locations = data.locations;
            this.advert = data.adverts;
        });
    }

}