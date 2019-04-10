import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service'
import { Restaurant } from '../restaurant'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private resService: RestaurantService) { }

  searchTags: string[];
  restaurants: Restaurant[] = this.resService.getRestaurants();

  ngOnInit() {
  }

  searchRestaurants(): Restaurant[]{
    var i: number;
    var j: number;
    var k: number;

    for(i = 0; i < this.searchTags.length; i++)
    {
      for(j = 0; j < this.restaurants.length; j++)
      {
        for(k = 0; k < this.restaurants[j].tags.length; k++)
        {
          if(this.restaurants[j].tags[k] != this.searchTags[i])
          {
            
          }
          else{

          }
        }
      }
    }


  }

  addTag(tag: string){
    this.searchTags.push(tag);
  }

  clear(){
    while(this.searchTags.length != 0){
      this.searchTags.pop;
    }
  }

}
