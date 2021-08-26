import { Component, OnInit } from '@angular/core';
import { WesternService } from '../western.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { CartService } from '../cart.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  Western: any = {};
  myForm: FormGroup;
  private quantity = 1;

  constructor(public toastController: ToastController,private activatedRoute: ActivatedRoute, private westernService: WesternService, private cartService: CartService,
    private formBuilder: FormBuilder, private alertController: AlertController, private router: Router) {
      this.myForm = formBuilder.group({
        'name': '',
        'img': '',
        'price': '',
        'desc':'',
        'quantity':''
        });
     }
     

private increment () {
  this.quantity++;
}

private decrement () { if (this.quantity > 1) { this.quantity--; } }

  ngOnInit() {
    // Get the id that was passed with the URL
 let id = this.activatedRoute.snapshot.paramMap.get('id');
 // Retrieve the user information through userService
 this.westernService.getOne(id).subscribe(result => {
 this.Western = result;
 this.Western.id = id;
 });
    
  }
      async addToCart() {
        this.cartService.add(this.Western.name, this.Western.price, this.Western.img, this.quantity, );
      this.router.navigate(['home']);
        const toast = await this.toastController.create({
          header: this.Western.name+' has been added to cart!',
          message: 'Click to Close',
          position: 'top',
          buttons: [
            {
              side: 'start',
              icon: 'cart',
              text: 'Cart',
              handler: () => {
                console.log('Cart clicked');
                this.router.navigate(['cart']);
              }
            }, {
              text: 'Done',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]
        });
        toast.present();
      }
}
