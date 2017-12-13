import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Adverts } from "../adverts";

//TODO ajouter un select avec les catégories --> ajouter les clés étrangeres

@Component({
    selector: 'app-new-advert',
    templateUrl: './new-advert.component.html',
    styleUrls: ['./new-advert.component.css']
})
export class NewAdvertComponent implements OnInit{

    //TODO initialiser le is_active a true

    private submitted = false;


    constructor(){}

    ngOnInit(){
    }
    onSubmit(){
        this.submitted = true;
    }





}
