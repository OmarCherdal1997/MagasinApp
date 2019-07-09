import { Component, OnInit, ViewChild } from '@angular/core';
import {MatMenuTrigger} from '@angular/material';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
 /* @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  someMethod(){
    this.trigger.openMenu();
  } */
  array = [0,1];
  images=[
    'http://wowslider.com/sliders/demo-77/data1/images/idaho239691_1920.jpg',
    'http://wowslider.com/sliders/demo-77/data1/images/road220058.jpg',
    'https://biogenicnutrition.com/wp-content/uploads/2015/10/Tree-1600-x-600.jpg',
    'https://www.axiomsl.com/wp-content/uploads/2018/05/img-Solutions-NEW.jpg'
  ]
  constructor() { }

  ngOnInit() {
  }

}
