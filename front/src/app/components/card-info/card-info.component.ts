import { Component, OnInit } from '@angular/core';
import { ServisService } from 'src/app/servis.service';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {


  fl: any;
  // Information
  fromPlace: string = 'New York';
  toPlace: string = 'Dublin';
  time: string = 'Tue, 15 Dec 2020';
  
  // Time
  vremePolaska: string = '17:30'
  vremeDolaska: string = '04:45'
  constructor(private servis: ServisService) { }

  ngOnInit() {

    this.servis.getRandomFlight().subscribe((data) => {
        
    })
  }

}
