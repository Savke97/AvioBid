import { Component, OnInit } from '@angular/core';
import { ServisService } from 'src/app/servis.service';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {

  info;
  constructor(public servis: ServisService) { }

  ngOnInit() {
    this.info = this.servis.cards;
  }

}
