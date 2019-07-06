export class Item {
  id: number;
  name: string;
  sell_date: Date;
  buy_date: Date;
  buy_price: number;
  sell_price: number;
  images: string;
  description: String;
  constructor (name: string,sell_date: Date,buy_date: Date,buy_price: number,sell_price: number,images: string,description: String){
   // this.id=id
    this.name=name;
    this.sell_date=sell_date;
    this.buy_date=buy_date;
    this.buy_price=buy_price;
    this.sell_price=sell_price;
    this.images=images;
    this.description= description;

  }
}
