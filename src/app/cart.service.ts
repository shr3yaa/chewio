import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private firestore: AngularFirestore) { }
  add(name, price, img, quantity) {
    return this.firestore.collection('cart').add({ name:name, price:price, img:img ,quantity:quantity});
    }
    update(id, name,  price, quantity) {
    return this.firestore.collection('cart').doc(id).set({ name: name, price:price, quantity:quantity });
    }
    delete(id) {
    return this.firestore.collection('cart').doc(id).delete();
    }
    getAll() {
    return this.firestore.collection('cart').valueChanges({ idField: 'id' });
    }
    getOne(id) {
    return this.firestore.collection('cart').doc(id).valueChanges();
    }
}
