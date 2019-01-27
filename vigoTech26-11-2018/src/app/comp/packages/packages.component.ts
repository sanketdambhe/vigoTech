import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {


  color1:string = 'red';
  color2:string = 'red';
  color3:string = 'red';
  color4:string = 'red';
  color5:string = 'red';
  color6:string = 'red';




changeStyle1($event){
  this.color1 = $event.type == 'mouseover' ? 'yellow' : 'red';
}
changeStyle2($event){
  this.color2 = $event.type == 'mouseover' ? 'yellow' : 'red';
}
changeStyle3($event){
  this.color3 = $event.type == 'mouseover' ? 'yellow' : 'red';
}
changeStyle4($event){
  this.color4 = $event.type == 'mouseover' ? 'yellow' : 'red';
}
changeStyle5($event){
  this.color5 = $event.type == 'mouseover' ? 'yellow' : 'red';
}
changeStyle6($event){
  this.color6 = $event.type == 'mouseover' ? 'yellow' : 'red';
}

  constructor() { }

  ngOnInit() {
  }

}
