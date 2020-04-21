import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient } from '@angular/common/http';
import { ProductComponent } from './product.component';
import { Observable } from 'rxjs';


@Injectable({providedIn:'root'})
export class ProductService {

    private _productUrl = './api/product.json';
    //private _productUrl = 'https://microserviceapi20200420192412.azurewebsites.net/getImages'
    

constructor(private _httpObject : HttpClient){
    
}

getProducts() : Observable<IProduct[]> {

   return this._httpObject.get<IProduct[]>(this._productUrl); 
//    [
//    {
//       "productId": 1,
//       "productName": 'Red Roses',
//       "productCode": "r-123",
//       "available": "Yes",
//       "price": 30.9,
//       "rating": 4.5, 
//       "imageUrl":"http://clipart-library.com/data_images/12453.jpg"
      
//    },
//    {
//       "productId": 1,
//       "productName": "Yellow Roses",
//       "productCode": "y-234",
//       "available": "Yes",
//       "price": 60.35,
//       "rating": 3.5,
//       "imageUrl":"http://clipart-library.com/images_k/yellow-rose-transparent/yellow-rose-transparent-19.png"
      
//    },
//    {
//       "productId": 3,
//       "productName": "Black Roses",
//       "productCode": "b-456",
//       "available": "No",
//       "price": 34.3565759869,
//       "rating": 2.5,
//       "imageUrl":"http://clipart-library.com/newimages/rose-clip-art-22.png"
      
//    },
//    {
//     "productId": 1,
//     "productName": 'Red Roses',
//     "productCode": "r-123",
//     "available": "Yes",
//     "price": 30.9,
//     "rating": 4.5, 
//     "imageUrl":"http://clipart-library.com/data_images/12453.jpg"
    
//  },
//  {
//     "productId": 1,
//     "productName": "Yellow Roses",
//     "productCode": "y-234",
//     "available": "Yes",
//     "price": 60.35,
//     "rating": 3.5,
//     "imageUrl":"http://clipart-library.com/images_k/yellow-rose-transparent/yellow-rose-transparent-19.png"
    
//  },
//  {
//     "productId": 3,
//     "productName": "Black Roses",
//     "productCode": "b-456",
//     "available": "No",
//     "price": 34.3565759869,
//     "rating": 2.5,
//     "imageUrl":"http://clipart-library.com/newimages/rose-clip-art-22.png"
    
//  }

//     ];
}

}