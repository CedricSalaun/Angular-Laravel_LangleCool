import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
// import { SessionStorageService } from 'ngx-webstorage';

// import { getToken } from '../services';

@Injectable()
export class LoginGuard implements CanActivate {
    private token: string = null;

    constructor(private router: Router) { console.log('LoginGuard'); }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('test');
        // this.token = getToken('sp_l');
        // if (this.token) {
        //     console.log(" ça passe dans le token login");
        //     this.router.navigate(['/d/home']);
        // }
        return true;
    }
}
