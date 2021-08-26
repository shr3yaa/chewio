import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class WesternService {

  constructor(private firestore: AngularFirestore) { }
  add(name, price, img) {
    return this.firestore.collection('Western').add({ name: name, price:price, img:img });
    }
    update(id, name,  price, img) {
    return this.firestore.collection('Western').doc(id).set({ name: name, price:price, img:img });
    }
    delete(id) {
    return this.firestore.collection('Western').doc(id).delete();
    }
    getAll() {
    return this.firestore.collection('Western').valueChanges({ idField: 'id' });
    }
    getOne(id) {
    return this.firestore.collection('Western').doc(id).valueChanges();
    }
}
