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

    var result: Restaurant[];

    for(i = 0; i < this.searchTags.length; i++)
    {
      for(j = 0; j < this.restaurants.length; j++)
      {
        for(k = 0; k < this.restaurants[j].tags.length; k++)
        {
          if(this.restaurants[j].tags[k] != this.searchTags[i])
          {
            //breaks out of the for loop if the tags aren't equal, starts on the next restaurant in the for loop
            break;
          }
          else{
            //if all tags are equal, pushes the restaurant into a result array
            result.push(this.restaurants[j])
          }
        }
      }
    }

    //returns the result array, if none of the restaurants have the tags, it will return an empty array
      return result;


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
