import { Injectable, EventEmitter } from '@angular/core';
import { Restaurant } from './restaurant';
import { RESTAURANTS } from './mock-restaurants';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  filteredRestaurants: Restaurant[];
  constructor() { }

  listUpdated = new EventEmitter<Restaurant[]>();

  getRestaurants(): Restaurant[]{
    return RESTAURANTS;
  }

  //grabs filtered restaurant results from the search component
  // takeFilteredRestaurants(result: Restaurant[]): void {
  //   this.filteredRestaurants = result;
  // }

  //gives the results to the list component
  // giveFilteredRestaurants(): Restaurant[]{
  //   return this.filteredRestaurants;
  // }

  
}
