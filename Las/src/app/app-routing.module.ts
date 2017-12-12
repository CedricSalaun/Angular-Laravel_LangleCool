import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AdvertsComponent} from "./adverts/adverts.component";
import {LoginComponent} from "./login/login.component";
import {CategoriesComponent} from "./categories/categories.component";
import {UsersComponent} from "./users/users.component";
import {LocationsComponent} from "./locations/locations.component";
import {ShowComponent} from "./show/show.component";

const routes: Routes = [
  {path: '', component: AdvertsComponent},
  {path: 'identification', component: LoginComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'utilisateurs', component: UsersComponent},
  {path: 'departements', component: LocationsComponent},
  {path: 'details', component: ShowComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
