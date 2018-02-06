import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { AdvertsComponent } from "./components/adverts/adverts.component";
import { LoginComponent } from "./components/login/login.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { UsersComponent } from "./components/users/users.component";
import { LocationsComponent } from "./components/locations/locations.component";
import { ShowComponent } from "./components/show/show.component";
import { RegisterComponent } from "./components/register/register.component";
import { AnswersComponent } from "./components/answers/answers.component";
import { NewAdvertComponent } from "./components/new-advert/new-advert.component";

const routes: Routes = [
    { path: '', component: AdvertsComponent },
    { path: 'identification', component: LoginComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'utilisateurs', component: UsersComponent },
    { path: 'departements', component: LocationsComponent },
    { path: 'details/:id', component: ShowComponent },
    { path: 'enregistrement', component: RegisterComponent },
    { path: 'nouvelle_annonce', component: NewAdvertComponent },
    { path: 'reponse/:id', component: AnswersComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {enableTracing: false})
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule{
}
