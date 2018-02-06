import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormGroup, NgForm } from "@angular/forms";

import { AdvertsService } from '../../services/adverts.service';
import { LocationsService } from '../../services/locations.service';
import { CategoriesService } from '../../services/categories.service';
import { FileUploadService } from '../../services/fileUpload.service';

@Component({
    selector: 'app-new-advert',
    templateUrl: './new-advert.component.html',
    styleUrls: [ './new-advert.component.css' ]
})
export class NewAdvertComponent implements OnInit {

    public advert;
    public categories: any = [];
    public locations: any = [];
    public users: any;
    public fileToUpload: File = null;

    constructor(private http: HttpClient, private _advert: AdvertsService, private _fileUploadService: FileUploadService,
                private _location: LocationsService, private _category: CategoriesService) {
    }

    public ngOnInit(): any {
        this._category.listCategories().subscribe(
            res => this.categories = res['categories'],
            error => console.error(error)
        );
        this._location.listLocations().subscribe(
            res => this.locations = res['locations'],
            error => console.error(error)
        );

        this.advert = {
            title: null,
            description: null,
            price: null,
            location: null,
            category: null
        };
        // this.advertForm = this.form.group({
        //     title: [ '' ],
        //     description: [ this.advert.description ],
        //     price: [ this.advert.price, [ Validators.required ] ],
        //     url_photo: [ this.advert.url_photo ],
        // });
        // this.getSelects(this.route.snapshot.params[ 'id' ]);
    }

    public handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    }

    public onSubmit(form: NgForm) {
        this.uploadFileToActivity();
        this.advert = {
            title: form.value.title,
            description: form.value.description,
            price: form.value.price,
            location_id: form.value.location,
            category_id: form.value.category,
            is_active: '0'
        };
    }

    private uploadFileToActivity() {
        this._fileUploadService.postFile(this.fileToUpload).subscribe(() => {
            this.advert.url_photo = "'"+ this.fileToUpload.name +"'";
        }, error => {
            console.log(error);
        }, () => { this.createAdvert();});
    }

    private createAdvert () {
        this._advert.createAdvert(this.advert).subscribe(
            result => console.log('result', result),
            error => console.log('error', error)
        );
    }
}
