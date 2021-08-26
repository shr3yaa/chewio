import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private firestore: AngularFirestore) { }
  add( address, time) {
    return this.firestore.collection('Orders').add({ address:address, time:time});
    }
    getAll() {
      return this.firestore.collection('Orders').valueChanges({ idField: 'id' });
      }
}
