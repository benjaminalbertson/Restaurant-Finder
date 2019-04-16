import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service'
import { Restaurant } from '../restaurant'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private resService: RestaurantService) { }

  restaurants: Restaurant[];
  ngOnInit() {
    this.getRestaurants();
  }

getRestaurants(): /*Restaurant[]*/void{
  this.restaurants = this.resService.getRestaurants();
  //return this.restaurants;
}
}
