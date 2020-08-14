import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logedIn = false;
  constructor() { }

  ngOnInit(): void {
  }
  logIn(): void{
    // After button 'Log in' is clicked
    console.log('Logged in');
  }
  homeClick(): void{
    // after logo was clicked
    console.log('logo was clicked');
  }
}
