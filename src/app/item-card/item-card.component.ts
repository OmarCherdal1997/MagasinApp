import { Component, OnInit, Input } from '@angular/core';
import {Item} from '../Item';
@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
@Input() item;
  constructor() { }

  ngOnInit() {
  }

}
