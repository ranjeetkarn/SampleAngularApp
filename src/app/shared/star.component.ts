import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector : 'star-component',
    templateUrl:'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges {   
   
   @Input() rating : number;
//    set rating(value:number){
//     console.log(value);
//    }

    starWidth: number;

    @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 70/5;
    }

    onClick(): void {       
        this.ratingClicked.emit(`the rating ${this.rating} was clicked!`);
    }
   

}