import { Component, OnInit } from '@angular/core';
import {ItemCardComponent} from '../item-card/item-card.component';
import {Items} from '../store-database';
import {Item} from '../Item';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
ItemList: Item [];

  constructor(private router: Router,private activeRoute : ActivatedRoute) { }

  ngOnInit() {
    this.ItemList=Items;
  }
  selectItem(item:Item){
    console.log("hola i'm working ");
    const id=item.id
    this.router.navigate([`/details/${id}`]);



  }
}
