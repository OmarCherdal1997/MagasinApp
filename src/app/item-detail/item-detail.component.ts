import { Component, OnInit } from '@angular/core';
import {Items} from '../store-database';
import {Item} from '../Item';
import { Router, ActivatedRoute } from '@angular/router';
import {ItemFetcherService} from '../item-fetcher.service';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
 itemSample: Item;

  constructor(private router: Router,private activeRoute : ActivatedRoute,private itemFetcherService : ItemFetcherService) { }


  ngOnInit() {
    console.log(this.router.url);
    console.log(this.activeRoute.params);
    console.log(this.activeRoute.paramMap);
    this.itemSample=this.getItembyId(this.activeRoute.snapshot.params.id);

  }
  getItembyId(id: string){
    return this.itemFetcherService.getItemByID(id);
    console.log(this.itemFetcherService.getItemByID(id));

  }

}
