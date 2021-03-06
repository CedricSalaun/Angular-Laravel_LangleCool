import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { AdvertsComponent } from './components/adverts/adverts.component';
import { UsersComponent } from './components/users/users.component';
import { LocationsComponent } from './components/locations/locations.component';
import { LoginComponent } from './components/login/login.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ShowComponent } from './components/show/show.component';
import { RegisterComponent } from './components/register/register.component';
import { NewAdvertComponent } from './components/new-advert/new-advert.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { AnswersComponent } from './components/answers/answers.component';
import { CategoriesFormComponent } from './components/categories-form/categories-form.component';
import { LocationsFormComponent } from './components/locations-form/locations-form.component';
import { AdvertsService } from "./services/adverts.service";
import { LocationsService } from './services/locations.service';
import { CategoriesService } from './services/categories.service';
import { FileUploadService } from './services/fileUpload.service';

@NgModule({
    declarations: [
        AppComponent,
        SearchBoxComponent,
        AdvertsComponent,
        UsersComponent,
        LocationsComponent,
        LoginComponent,
        CategoriesComponent,
        ShowComponent,
        RegisterComponent,
        NewAdvertComponent,
        UserAccountComponent,
        AnswersComponent,
        CategoriesFormComponent,
        LocationsFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [ AdvertsService, LocationsService, CategoriesService, FileUploadService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
