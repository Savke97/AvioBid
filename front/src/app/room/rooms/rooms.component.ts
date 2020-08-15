import { Component, OnInit, ViewChild} from '@angular/core';
import { ServisService } from 'src/app/servis.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  /* Deklaracija za forme */
  autoBidingForm: FormGroup;
  max_Auto_Bid: number;
  increment: number;

  bidingForm: FormGroup;
  biding_Price: number;

  constructor(public servis: ServisService) { }

  ngOnInit() {

    /* Kreiranje FormGrupa */
    this.autoBidingForm = new FormGroup({
      'autoBidMaxPrice': new FormControl(null, Validators.required),
      'increment': new FormControl(null, Validators.required)
    });

    this.bidingForm = new FormGroup({

      'bidingPrice': new FormControl(null, Validators.required)
    })
  }


  /* Submit za auto bid formu */
  onSubmitAutoBid(){

    this.max_Auto_Bid = this.autoBidingForm.get('autoBidMaxPrice').value;
    this.increment = this.autoBidingForm.get('increment').value;
  }

  /* Submit za bid fromu */
  onBidSubmit(){
    
    this.biding_Price = this.bidingForm.get('bidingPrice').value;
  }

  onLeaveAuction(){
    this.servis.leaveauction = true;
  }

  onAutoSlide(){
    this.counter++;
    this.counter % 2 ? console.log('Auto bid ugasen') : console.log('Auto bid Upaljen');
  }
}
