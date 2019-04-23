import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RestaurantService } from '../restaurant.service'
import { Restaurant } from '../restaurant'
import { DetailService } from '../detail.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

 // @Output() eventClicked = new EventEmitter<Event>();

  constructor(private resService: RestaurantService, private detService: DetailService) { this.resService.listUpdated.subscribe(
    (result: Restaurant[]) => this.restaurants = result
  );}

  restaurants: Restaurant[];
  result: Restaurant;
  
  ngOnInit() {
    //Integrated into constructor
    //this.restaurants = this.resService.getRestaurants();
    //this.getRestaurants();
    
  }

  public open(restaurant: Restaurant): void{
    console.log(restaurant.description);
    //this.eventClicked.emit(event);
    this.result = restaurant;
    console.log(this.detService.selectedRestaurant);
    this.detService.detailUpdated.emit(this.result);
  }

//Integrated into constructor
// getRestaurants(): /*Restaurant[]*/void{
//   this.restaurants = this.resService.giveFilteredRestaurants();
//   //return this.restaurants;
// }

}
