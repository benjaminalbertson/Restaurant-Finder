import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant'
import { DetailService } from '../detail.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private detService: DetailService) {this.detService.detailUpdated.subscribe(
    (result: Restaurant) => this.restaurant = result
  ); }

  restaurant: Restaurant;

  ngOnInit() {
  }





}
