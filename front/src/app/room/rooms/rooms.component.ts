import { Component, OnInit} from '@angular/core';
import { ServisService } from 'src/app/servis.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})


export class RoomsComponent implements OnInit{

  listPackage: string [] = ['Laptop', 'Jakna', 'Torba', 'Ljubimac'];

  /* Deklaracija za forme */
  autoBidingForm: FormGroup;
  max_Auto_Bid: number;
  increment: number;

  bidingForm: FormGroup;
  biding_Price: number = 1000;

  bid_placeHolder: number = 1000;

  constructor(public servis: ServisService, private http: HttpClient) { }

  ngOnInit() {

    /* Kreiranje FormGrupa */
    this.autoBidingForm = new FormGroup({
      'autoBidMaxPrice': new FormControl(null, Validators.required),
      'increment': new FormControl(null, Validators.required)
    });

    this.bidingForm = new FormGroup({

      'bidingPrice': new FormControl(null, Validators.required)
    })

    /* this.http.get('https://us-central1-aukcija-edit-2020.cloudfunctions.net/getRandomFlight').subscribe((res) => {
        console.log(res);
    }) */
  }




  /* Submit za auto bid formu */
  onSubmitAutoBid(){

    this.max_Auto_Bid = parseInt(this.autoBidingForm.get('autoBidMaxPrice').value);
    this.increment = parseInt(this.autoBidingForm.get('increment').value);
  }

  /* Submit za bid fromu */
  onBidSubmit(){

    this.bidingForm.get('bidingPrice').value < this.biding_Price ? alert('Greska!') : this.biding_Price = parseInt(this.bidingForm.get('bidingPrice').value);

    if(this.biding_Price != this.bid_placeHolder){

      this.max_Auto_Bid <= this.biding_Price ? alert('Unesi te ponovo auto bid') : this.biding_Price = this.biding_Price + this.increment;
    }
    this.bid_placeHolder = this.biding_Price; 
  }

  onLeaveAuction(){
    this.servis.leaveauction = true;
  }
}
