import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CarToBuyModel} from "../../model/car-to-buy.model";

@Component({
  selector: 'app-car-display-block',
  templateUrl: './car-display-block.component.html',
  styleUrls: ['./car-display-block.component.css']
})
export class CarDisplayBlockComponent implements OnInit {

  @Input() carData!: CarToBuyModel;
  @Output() carSelected = new EventEmitter<CarToBuyModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectCar() {
    this.carSelected
      .emit(this.carData);
  }
}


