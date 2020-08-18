import { Component, OnInit } from '@angular/core';
import { ServisService } from '../servis.service';
import { HttpClient } from '@angular/common/http';
import { Flights } from '../moduls/Flights'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  flights: Flights;
  show_Room: boolean = false;
  show_Spiner: boolean = false;




  constructor(public servis: ServisService, private http: HttpClient) { }

  ngOnInit(): void {}



  onShowRoom(roomIndex: number){

    document.getElementById("goto").scrollIntoView({behavior: 'smooth'});
    this.servis.index = roomIndex;
    this.show_Spiner = true;
    this.servis.leaveauction = false;

    setInterval(() => {
        this.show_Room = true;
        this.show_Spiner = false;
    }, 1000);
  }
}
