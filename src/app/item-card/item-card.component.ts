import { Component, OnInit } from '@angular/core';
import {Item} from '../Item';
@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
test_item: Item={
      buy_date: new Date(),
      buy_price: 13,
      images: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "ikram",
      sell_date: new Date(),
      sell_price: 1,
      description:'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
}
  constructor() { }

  ngOnInit() {
  }

}
