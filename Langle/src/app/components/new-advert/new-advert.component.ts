import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AdvertsService } from "../../services/adverts.service";


@Component({
    selector: 'app-new-advert',
    templateUrl: './new-advert.component.html',
    styleUrls: ['./new-advert.component.css']
})
export class NewAdvertComponent implements OnInit{

    //TODO initialiser le is_active a true

    private submitted = false;
    advert: any;
    categories: any;
    locations: any;
    users: any;
    results: any;

    ad: any;
    adForm: FormGroup;

    constructor(private http: HttpClient, private route: ActivatedRoute, private adService: AdvertsService, private fb: FormBuilder){
    }

    ngOnInit(): any{
        this.getSelects();
    }

    getSelects(): any{
        let url = 'http://localhost:8000/api/adverts/new/';
        this.http.get(url)
            .subscribe(data =>{
                this.categories = data["categories"];
                this.locations = data["locations"];
                console.log(this.locations)
            });
    }


    startNewAdListing(){
        this.ad = this.adService.pushAd();
        this.buildForm();
    }

    saveAdChanges(){
        if(this.adForm.status != 'VALID'){
            console.log("c'est pas valide cousin");
            return
        }
        const data = this.adForm.value;
        this.adService.updateAd(this.ad, data);
    }

    private buildForm(){
        this.adForm = this.fb.group({
            title: [''],
            content: [''],
            price: [''],
            image: [''],
        });
    }

    onSubmit(){
        //let url = "http://localhost:8000/api/adverts/new";
    }
}
