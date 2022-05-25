import {Component, Input, OnInit} from '@angular/core';
import {CarToBuyModel} from "../model/car-to-buy.model";

@Component({
  selector: 'app-car-display-block',
  templateUrl: './car-display-block.component.html',
  styleUrls: ['./car-display-block.component.css']
})
export class CarDisplayBlockComponent implements OnInit {

  @Input() carData!: CarToBuyModel;

  constructor() { }

  ngOnInit(): void {
  }

}


