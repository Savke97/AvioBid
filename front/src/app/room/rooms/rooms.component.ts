import { Component, OnInit, ViewChild } from '@angular/core';
import { ServisService } from 'src/app/servis.service';
import { NgForm } from '@angular/forms';

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

  counter: number = 1;
  listPackage: string [] = ['Laptop', 'Jakna', 'Torba', 'Ljubimac'];

  @ViewChild('manuelValue') manuelValue: string;

  stepIncrement: StepIncrement[] = [
    {value: '100', viewValue: '100'},
    {value: '200', viewValue: '200'}
  ];

  constructor(public servis: ServisService) { }

  ngOnInit(): void {
  }

  onLeaveAuction(){
    this.servis.leaveauction = true;
  }

  onSubmit(form: NgForm){
      if(form.value.name > this.servis.current_max_Bid){
        this.servis.current_max_Bid = form.value.name;
      }else{
       /*  Ubaci nesto kao swet alert */
      }

      let max_Bid = form.value.autoMaxBid;
      console.log(max_Bid);
  }
  // tslint:disable-next-line:typedef
  onAutoSlide(){
    this.counter++;
    this.counter % 2 ? console.log('Auto bid ugasen') : console.log('Auto bid Upaljen');
  }
}
