import { Component, OnInit } from '@angular/core';
import { ServisService } from 'src/app/servis.service';

@Component({
  selector: 'app-admin-hero-page',
  templateUrl: './admin-hero-page.component.html',
  styleUrls: ['./admin-hero-page.component.scss']
})
export class AdminHeroPageComponent implements OnInit {

  


  constructor(public servis: ServisService) { }

  ngOnInit(): void {
    
  }

  onLogout() {}

  onShowAuction(index: number) {
    this.servis.indexCard = index;
  }

}
