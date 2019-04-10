import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private resService: RestaurantService) { }

  ngOnInit() {
  }

}
