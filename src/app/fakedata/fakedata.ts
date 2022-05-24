import {CarToBuyModel} from "../model/car-to-buy.model";

export function returnFakeData() {
  return {
    payload: CARSlIST
  }
}

export const CARSlIST: CarToBuyModel[] = [
  {
    name: 'BMW',
    description: 'A good car',
    price: 1000,
    quantityLeftInStock: 10,
    imageOfCar: '',
    carUid: 'AAA'
  },
  {
    name: 'Honda',
    description: 'A ok car',
    price: 500,
    quantityLeftInStock: 23,
    imageOfCar: '',
    carUid: 'BBB'
  },
  {
    name: 'tOYOTA',
    description: 'A family car',
    price: 300,
    quantityLeftInStock: 400,
    imageOfCar: '',
    carUid: 'CCC'
  },



]
