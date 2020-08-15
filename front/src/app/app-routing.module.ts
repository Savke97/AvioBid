import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroPageComponent } from './components/hero-page/hero-page.component';
import { RoomComponent } from './room/room.component';
import { AuctionConfirmComponent } from './components/auction-confirm/auction-confirm.component';

const routes: Routes = [
  {path: "", component: HeroPageComponent},
  {path: "Bid", component: RoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
