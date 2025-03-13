import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard {

    constructor(private serviceAuth: AuthService, private router: Router) { }

    canActivate(): boolean {
        if (this.serviceAuth.isLoggedIn()) {
            //this.router.navigate(['/dashboard']);
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
