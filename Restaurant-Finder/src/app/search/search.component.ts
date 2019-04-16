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

  selectedRestaurantType = "none";
  selectedFoodType = "none";
  selectedPriceRange = "none";

  // searchTags: string[];
  restaurants: Restaurant[] = this.resService.getRestaurants();

  ngOnInit() {
    
  }


   searchRestaurants(): Restaurant[]{

     var result:Restaurant[];

    for(let entry of this.restaurants){
      if(entry.restaurantType === this.selectedRestaurantType && entry.foodType === this.selectedFoodType && entry.priceRange === this.selectedPriceRange){
        result.push(entry);
      }
    }
    
     
    //returns the result array, if none of the restaurants have the tags, it will return an empty array
       return result;


  }

  // addTag(tag: string){
  //   this.searchTags.push(tag);
  // }

  // clear(){
  //   while(this.searchTags.length != 0){
  //     this.searchTags.pop;
  //   }
  // }

}
