import { Component, Input, OnChanges, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'starComponent',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
 @Input() starRating: number =0;
  cropwidth: number = 75;

  @Output() notify: EventEmitter<number> = new EventEmitter<number> ();



  ngOnChanges(): void {
    this.cropwidth = (this.starRating * 75) / 5;
  }

  onClick():void{
    this.notify.emit(this.starRating);

  }

}
