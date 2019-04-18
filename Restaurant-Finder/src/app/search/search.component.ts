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

  selectedRestaurantType: string = "none";
  selectedFoodType: string = "none";
  selectedPriceRange: string = "none";

  resultString: string = "none";
  result: Restaurant[];
  restaurants: Restaurant[] = this.resService.getRestaurants();

  ngOnInit() {
    this.searchRestaurants();
  }
  
  printArray(){
    for(let entry in this.result)
      this.resultString = this.resultString + entry;
  }

   searchRestaurants(){
    this.result = [];
    
    for(let entry of this.restaurants){
      if((entry.restaurantType == this.selectedRestaurantType || this.selectedRestaurantType == "none") && (entry.foodType == this.selectedFoodType || this.selectedFoodType == "none") && (entry.priceRange == this.selectedPriceRange || this.selectedPriceRange == "none")){
        this.result.push(entry);
      }
      this.printArray();
    }

    this.resService.listUpdated.emit(this.result);

    

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
