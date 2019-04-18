import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service'
import { Restaurant } from '../restaurant'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private resService: RestaurantService) { this.resService.listUpdated.subscribe(
    (result: Restaurant[]) => this.restaurants = result
  );}

  restaurants: Restaurant[];
  
  ngOnInit() {
    //Integrated into constructor
    //this.restaurants = this.resService.getRestaurants();
    //this.getRestaurants();
    
  }


//Integrated into constructor
// getRestaurants(): /*Restaurant[]*/void{
//   this.restaurants = this.resService.giveFilteredRestaurants();
//   //return this.restaurants;
// }

}
