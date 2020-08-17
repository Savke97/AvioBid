import { Component, OnInit} from '@angular/core';
import { ServisService } from 'src/app/servis.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';

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
  auto_Bid_Active: boolean = false;
  auto_Bid_Text_Button: string = 'Activate me';

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
    this.auto_Bid_Active = !this.auto_Bid_Active;

    if(this.autoBidingForm.get('autoBidMaxPrice').value != null){

      this.auto_Bid_Active ? this.auto_Bid_Text_Button = 'Deactivate me' : this.auto_Bid_Text_Button = 'Activate me';

      this.max_Auto_Bid > this.biding_Price ? this.biding_Price += this.increment : 0; 
      this.bid_placeHolder = this.biding_Price;
    }
  }

  /* Submit za bid fromu */
  onBidSubmit(){

    this.bidingForm.get('bidingPrice').value <= this.biding_Price ? alert('Error! You have entered a price below the current bid or the same as the current bid') : this.biding_Price = parseInt(this.bidingForm.get('bidingPrice').value);

    /* Aktivacija auto bida ako je cena ispod trenutne ponudjenje */
    if(this.biding_Price != this.bid_placeHolder && this.auto_Bid_Active  ){

      this.max_Auto_Bid <= this.biding_Price ? alert('Salje se meil korisniku da je njegova max cena prevazidjena') : this.biding_Price += this.increment;
    }
    this.bid_placeHolder = this.biding_Price; 
  }

  onLeaveAuction(){
    this.servis.leaveauction = true;
  }
}
