import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-adverts',
    templateUrl: './adverts.component.html',
    styleUrls: ['./adverts.component.css']
})
export class AdvertsComponent implements OnInit{

    adverts: any;
    categories: any;
    locations: any;
    users: any;
    results: any;

    public title = 'L\'Angle Cool';

    constructor(private http: HttpClient){
    }

    ngOnInit(): void{
        let url = 'http://localhost:8000/api/adverts/all';
        this.http.get(url)
            .subscribe(data =>{
                this.users = data.users;
                this.categories = data.categories;
                this.locations = data.locations;
                this.adverts = data.adverts;
            })
    }

}
