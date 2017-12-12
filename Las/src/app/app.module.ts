import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { AdvertsComponent } from './adverts/adverts.component';
import { UsersComponent } from './users/users.component';
import { LocationsComponent } from './locations/locations.component';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './categories/categories.component';
import { AppRoutingModule } from './/app-routing.module';
import { ShowComponent } from './show/show.component';
import { RegisterComponent } from './register/register.component';
import { NewAdvertComponent } from './new-advert/new-advert.component';
import { UserAccountComponent } from './user-account/user-account.component';


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
    UserAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
