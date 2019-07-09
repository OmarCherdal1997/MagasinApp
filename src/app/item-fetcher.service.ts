import { Injectable } from '@angular/core';
import {Item} from './Item'
import {Items} from './store-database';
import {Observable} from 'rxjs'
import { isEmptyExpression } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class ItemFetcherService {
  temList : Item []=Items;
 result: Observable<Item> =new  Observable() ;
  constructor() { }
  /* getItemById(id:number){
    this.result.subscribe(()=>{
      return this.itemList.pipe(
        map(
          (item)=> {return item.id=== id}
        )

        ))
    })
  } */
  getItemByID(id: string): Item {
    console.log('this is the id:'+ id + typeof(Number(id)));

    const pos= this.temList.findIndex(
      (item)=>{
        console.log(item.id === Number(id));
       return  item.id === Number(id)

      }
    )
    console.log(pos);
    if(pos !== -1){
      console.log(this.temList[pos]);

      return this.temList[pos];
    }
    return;

      console.log("it doesn't work");


  }
}
