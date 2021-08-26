
import { CartService } from '../cart.service';
import { AlertController } from '@ionic/angular';
import { OrderService } from '../order.service';
import { Router, ActivatedRoute } from '@angular/router';
// home.page.ts
import { Component, OnInit, } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { Vibration } from '@ionic-native/vibration/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {
  cart: any = [];
  Orders: any = [];
  address: any;
  time: any;

  myForm: FormGroup;

  constructor(private localNotifications: LocalNotifications, private vibration: Vibration, private formBuilder: FormBuilder, private router: Router, private cartService: CartService,
    private orderService: OrderService, private alertController: AlertController  ) {
    // subscribe allows the data to be fetched whenever there is any changes to the data
    cartService.getAll().subscribe((data) => { this.cart = data; });
    orderService.getAll().subscribe((data) => { this.Orders = data; });

    this.myForm = formBuilder.group({
      'address': '',
      'time': ''
    });

  }
  placeOrder() {
    this.orderService.add(this.myForm.value.address, this.myForm.value.time);
    this.router.navigate(['home']);
    this.vibration.vibrate(1500);

    // Schedule a single notification
    this.localNotifications.schedule({
      id: 1,
      text: 'Successful order! Your order will reach you at ' + this.myForm.value.time
    });

  }



}
