import { Component, OnInit, ViewChild } from '@angular/core';

interface StepIncrement{
  value: string,
  viewValue: string
}

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})


export class RoomsComponent implements OnInit {

//  User information
  userName: string = 'Aca Perin';
  userDate: string = '01 jan 1990'
  userAmount: string = '3';
// Bussines package
  listPackage: string [] = ['Laptop','Jakna','Torba','Ljubimac'];
// Timer
  time: string = '5h:48min';
// Manual bids
  @ViewChild('manuelValue') manuelValue: string;
// Steps
  stepIncrement: StepIncrement[] = [
    {value: '100', viewValue:'100'},
    {value: '200', viewValue:'200'}
  ];

  constructor() { }

  ngOnInit(): void {
  }
 
}
