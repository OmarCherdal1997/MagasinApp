import { Component, OnInit, ViewChild } from '@angular/core';
import {MatMenuTrigger} from '@angular/material';
import { trigger } from '@angular/animations';
import { NzGridModule } from 'ng-zorro-antd/grid';

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
  array = [0,1,2,3,4];
  images=[
    'http://wowslider.com/sliders/demo-77/data1/images/idaho239691_1920.jpg',
    'http://wowslider.com/sliders/demo-77/data1/images/road220058.jpg',
    'https://biogenicnutrition.com/wp-content/uploads/2015/10/Tree-1600-x-600.jpg',
    'https://www.axiomsl.com/wp-content/uploads/2018/05/img-Solutions-NEW.jpg',
    'https://www.trndlabs.com/wp-content/uploads/2016/06/trndlabs-site-banner-template-1600-600-decembers-shipping-4.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFcgnTQay0vEYlb7ij6U8ETYUnZNrneqBna0l7X6Fa3onsKcdj'
  ]
  images2=[

    'https://i.stack.imgur.com/hOIuY.jpg',
    'https://i.stack.imgur.com/zMoo4.jpg'

  ]
  constructor() { }

  ngOnInit() {
  }

}
