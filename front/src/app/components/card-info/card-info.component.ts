import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {

  fromPlace: string = 'New York';
  toPlace: string = 'Dublin';
  time: string = 'Tue, 15 Dec 2020';
  
  day: string = '1'
  constructor() { }

  ngOnInit(): void {
  }

}
