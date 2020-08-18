import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroPageComponent } from './components/hero-page/hero-page.component';
import { RoomComponent } from './room/room.component';
import { RoomsComponent } from './room/rooms/rooms.component';
import { AuctionConfirmComponent } from './components/auction-confirm/auction-confirm.component';
import { AdminRoomComponent } from './components/admin-room/admin-room.component';
import { AdminHeroPageComponent } from './components/admin-room/admin-hero-page/admin-hero-page.component';

const routes: Routes = [
  {path: "", component: HeroPageComponent},
  {path: "Bid", component: RoomComponent},
  { path: "Rooms/: id", redirectTo: '/Bid'},
  {path: "AdminRoom", component: AdminRoomComponent},
  {path: "AdminHeroPage", component: AdminHeroPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
