import { Component, OnInit } from '@angular/core';
import { ServisService } from 'src/app/servis.service';

@Component({
  selector: 'app-admin-room',
  templateUrl: './admin-room.component.html',
  styleUrls: ['./admin-room.component.scss']
})
export class AdminRoomComponent implements OnInit {


  constructor(public service: ServisService) {}

  ngOnInit(): void {
  }

  onLogout() {}

  onStartAuction(roomIndex: boolean){
    this.servis.checkCard = roomIndex;
  }
  
  onStopAuction(roomIndex: number) {
    // this.servis.indexCard = number;
  }
 
}
