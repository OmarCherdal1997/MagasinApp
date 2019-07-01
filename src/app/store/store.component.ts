import { Component, OnInit } from '@angular/core';
import {ItemCardComponent} from '../item-card/item-card.component';
import {Items} from '../store-database';
import {Item} from '../Item';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
ItemList: Item [];

  constructor() { }

  ngOnInit() {
    this.ItemList=Items;
  }

}
