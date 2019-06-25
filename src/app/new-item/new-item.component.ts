import { Component, OnInit } from '@angular/core';
import {Item} from '../Item';
import {FormControl, FormGroup, NgForm} from '@angular/forms'
@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
 item: Item;

 constructor() { }

  ngOnInit() {
  }

  onSubmit(form){

    console.log(form);
    let val=form.value;
    this.item= new Item(val.name, val.sell_date,val.buy_date,val.buy_price,val.Sell_price,val.images, val.description);
    console.log(this.item)
  }
}
