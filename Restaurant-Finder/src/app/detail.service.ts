import { Injectable, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant';
import { RESTAURANTS } from './mock-restaurants';


@Injectable({
  providedIn: 'root'
})
export class DetailService {

  selectedRestaurant: Restaurant;
  constructor() { }

  detailUpdated = new EventEmitter<Restaurant>();

  showRestaurant(): Restaurant{
    return this.selectedRestaurant;
  }
}
