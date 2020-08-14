import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServisService {

  constructor() { }

  leaveauction: boolean = false;
  index: number;

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
}
