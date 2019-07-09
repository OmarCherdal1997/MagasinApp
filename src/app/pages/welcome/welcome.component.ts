import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
images=[
  'https://wet-boew.github.io/v4.0-ci/demos/tabs/img/protect-environment.jpg',
  'http://wowslider.com/sliders/demo-77/data1/images/idaho239691_1920.jpg'

];
array = [1, 2, 3, 4];
effect = 'scrollx';
  constructor() { }

  ngOnInit() {
  }

}
