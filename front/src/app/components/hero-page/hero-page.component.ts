import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss']
})
export class HeroPageComponent implements OnInit {
  constructor() { }

  loginForm: FormGroup;
  log: boolean = false;

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(5)])
    });
  }

  onSubmit(){
    this.log = true;
  }

}
