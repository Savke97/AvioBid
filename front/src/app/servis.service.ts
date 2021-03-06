import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Injectable, EventEmitter } from '@angular/core';
import { RoomComponent } from './room/room.component';


@Injectable({
  providedIn: 'root'
})
export class ServisService {

  constructor(private http: HttpClient) { }

  current_max_Bid: number = 0;
  leaveauction: boolean = false;
  index: number;
  won: boolean = false;


  public getRandomFlight(): Observable<any>{
    return this.http.get('https://us-central1-aukcija-edit-2020.cloudfunctions.net/app/api/flights/getRandomFlight');
  }

  public setUserData(data: any): Observable<any>{
    return this.http.post('https://us-central1-aukcija-edit-2020.cloudfunctions.net/app/api/flights/getRandomFlight', data);
  }

  public getUser(): Observable<any>{
    return this.http.get('https://us-central1-aukcija-edit-2020.cloudfunctions.net/app/api/users/');
  }

  user = [
    {
      name: 'Marko Djordjevic',
      born: '02 mar 1999'
    }
  ];
  
  rooms = [
    {
      room: 1,
      price: 1000,
      bids: 3,
      time: '12 apr 2020 6:00 pm'
    },
    {
      room: 2,
      price: 1200,
      bids: 4,
      time: '08 apr 2020 5:00 pm'
    },
    {
      room: 3,
      price: 1500,
      bids: 8,
      time: '20 apr 2020 4:00 pm'
    },
    {
      room: 4,
      price: 1150,
      bids: 2,
      time: '14 apr 2020 6:30 pm'
    },
  ];
  
  indexCard: number;
  checkCard: boolean = false;
  cards = [
    {
      fromPlace: 'New York',
      toPlace:  'Dublin',
      time: 'Tue, 15 Dec 2020',
      departureTime: '17:30',
      arrivalTime: '04:45'
    },
    {
      fromPlace: 'Belgrade',
      toPlace:  'Peking',
      time: 'Tue, 10 Jan 2020',
      departureTime: '07:30',
      arrivalTime: '04:45'
    },
    {
      fromPlace: 'London',
      toPlace:  'Paris',
      time: 'Tue, 15 Dec 2021',
      departureTime: '17:00',
      arrivalTime: '04:45'
    },
    {
      fromPlace: 'Vranje',
      toPlace:  'Kragujevac',
      time: 'Tue, 15 Dec 2045',
      departureTime: '17:00',
      arrivalTime: '04:45'
    }
  ];
}
