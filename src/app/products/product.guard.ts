import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable({providedIn:'root'})
export class ProductDetailGuard implements CanActivate {
    constructor(private _router : Router){

    }

    canActivate(_route: ActivatedRouteSnapshot) : boolean {
        let id = +_route.url[1].path;
        if (isNaN(id) || id<1){         
            alert('Invalid product id');
            this._router.navigate(['/product'])
            return false;
        };      
        return true;
    } 

}