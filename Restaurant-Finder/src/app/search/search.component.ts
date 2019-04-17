import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service'
import { Restaurant } from '../restaurant'
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { print } from 'util';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private resService: RestaurantService) { }

  selectedRestaurantType: string;
  selectedFoodType: string;
  selectedPriceRange: string;

  result: Restaurant[];

  // searchTags: string[];
  restaurants: Restaurant[] = this.resService.getRestaurants();

  ngOnInit() {
    this.searchRestaurants();
    //example
  }
  


   searchRestaurants(){
    for(let entry of this.restaurants){
      if(entry.restaurantType == this.selectedRestaurantType && entry.foodType == this.selectedFoodType && entry.priceRange == this.selectedPriceRange){
        this.result.push(entry);
      }
    }
    
    //this.resService.takeFilteredRestaurants(this.result);

    this.resService.listUpdated.emit(this.result);

    this.result = [];

  }


    // createList(){
  //   var resList = [this.selectedRestaurantType,this.selectedFoodType,this.selectedPriceRange];
  //   var ul = document.querySelector("ul");
  //   for(var i = 0; i < resList.length; i++)
  //   {
  //     var listItem = resList[i];
  //     var item = document.createElement("li");
  //     item.textContent = listItem;
  //     ul.appendChild(item);
  //   }
  // }
}
