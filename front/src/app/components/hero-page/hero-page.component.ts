import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServisService } from 'src/app/servis.service';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss']
})
export class HeroPageComponent implements OnInit {
  constructor(private servis: ServisService) { }

  loginForm: FormGroup;
  log: boolean = false;
  name: string;
  email: string;

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'fullname': new FormControl(null, Validators.required)
    });
  }


  onSubmit(){
    this.log = true;
    this.email = this.loginForm.get('email').value;
    this.name = this.loginForm.get('fullname').value;
    this.servis.userData({email: this.email, name: this.name});
  }

}
