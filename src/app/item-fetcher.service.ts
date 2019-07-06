import { Injectable } from '@angular/core';
import {Item} from './Item'
import {Items} from './store-database';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ItemFetcherService {
  itemList=Items;
 result: Observable<Item> =new  Observable() ;
  constructor() { }
  getItemById(id:number){
    this.result.subscribe(()=>{
      return this.itemList.pipe(
        map(
          (item)=> {return item.id=== id}
        )

        ))
    })
  }
}
