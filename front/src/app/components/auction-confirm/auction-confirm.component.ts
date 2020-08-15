import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auction-confirm',
  templateUrl: './auction-confirm.component.html',
  styleUrls: ['./auction-confirm.component.scss']
})
export class AuctionConfirmComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  auctionYes(): void{
    console.log('yes');
  }
  auctionNo(): void{
    console.log('no');
  }
}
