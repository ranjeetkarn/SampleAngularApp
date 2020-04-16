import { Component } from '@angular/core';
import { IProduct } from './product';


@Component({
    selector: 'product-component',
    templateUrl: './product.component.html'  
    //template: `My first Product Component`
})
export class ProductComponent{
 pageTitle: string = 'Product List';
 imageHeight:number = 60;
 imageWidth: number = 60;
 imageMargin : number = 5;
 showImage : boolean = true;
 filterProduct : string = 'product filter';

 toggleImages() : void {
  this.showImage = !this.showImage;
 }

 products: IProduct[] = [
   {
      "productId": 1,
      "productName": 'Red Roses',
      "productCode": "r-123",
      "available": "Yes",
      "price": 30.9,
      "rating": 4.5, 
      "imageUrl":"http://clipart-library.com/data_images/12453.jpg"
      
   },
   {
      "productId": 1,
      "productName": "Yellow Roses",
      "productCode": "y-234",
      "available": "Yes",
      "price": 60.35,
      "rating": 3.5,
      "imageUrl":"http://clipart-library.com/images_k/yellow-rose-transparent/yellow-rose-transparent-19.png"
      
   },
   {
      "productId": 3,
      "productName": "Black Roses",
      "productCode": "b-456",
      "available": "No",
      "price": 34.3565759869,
      "rating": 2.5,
      "imageUrl":"http://clipart-library.com/newimages/rose-clip-art-22.png"
      
   } 
]

}

