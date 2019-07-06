import { Component, OnInit } from '@angular/core';
import {Items} from '../store-database';
import {Item} from '../Item';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
 itemSample: Item= Items [0];

  constructor(private router: Router,private activeRoute : ActivatedRoute) { }


  ngOnInit() {
    console.log(this.router.url);
    console.log(this.activeRoute.params);
    console.log(this.activeRoute.paramMap);

  }

}
