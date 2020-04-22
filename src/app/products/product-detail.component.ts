import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
 templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

    pageTitle: string;
    
    constructor(private _route : ActivatedRoute, private _router: Router){
    //console.log(_route.snapshot.paramMap.get('id'))
    }
    ngOnInit(): void {
        let id = +this._route.snapshot.paramMap.get('id')
        this.pageTitle = `Product Details of product Id: ${id}`;
    }

    onBack(): void {
        this._router.navigate(['/product']);
    }
}