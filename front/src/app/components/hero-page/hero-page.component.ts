import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss']
})
export class HeroPageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  logIn(): void{
    // After button 'Log in' is clicked
  }
  homeClick(): void{
    // after logo was clicked
  }

}
