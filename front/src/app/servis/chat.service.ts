import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { firestore } from 'firebase/app';
import { map, switchMap } from 'rxjs/operators';
import { Observable, combineLatest, of } from 'rxjs';
import { ServisService } from '../servis.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private servise: ServisService, private afs: AngularFirestore, private router: Router) { }


  async create() {

    const  userEmail  = 'savkeren97@gmai.com';

    const data = {
      userEmail,
      createdAt: Date.now(),
      count: 0,
      messages: []
    };

    const docRef = await this.afs.collection('Rooms').add(data);

    return this.router.navigate(['Rooms', docRef.id]);
  }
}
