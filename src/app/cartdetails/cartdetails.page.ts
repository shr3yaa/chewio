import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cartdetails',
  templateUrl: './cartdetails.page.html',
  styleUrls: ['./cartdetails.page.scss'],
})
export class CartdetailsPage implements OnInit {
  cart: any = {};
  myForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private cartService: CartService,
    private formBuilder: FormBuilder, private alertController: AlertController, private router: Router) { 
      this.myForm = formBuilder.group({
        'name': '',
        'price': '',
        'quantity':''
        });
    }

  ngOnInit() {
     // Get the id that was passed with the URL
 let id = this.activatedRoute.snapshot.paramMap.get('id');
 // Retrieve the user information through userService
 this.cartService.getOne(id).subscribe(result => {
 this.cart = result;
 this.cart.id = id;
 });
  }
  delete() {
    const alert = this.alertController.create({
    header: 'Delete '+ this.cart.name + "?",
    message: 'Are you sure you want to delete this food item?',
    buttons: [
    { text: 'No', role: 'cancel'},
    { text: 'Yes',
    handler: (alertData) => { // Delete user through user service
    this.cartService.delete(this.cart.id);
    this.router.navigate(['cart']);
    }
    }
    ]}).then(alert => alert.present());
    }
    update() {
      this.cartService.update(this.cart.id, this.cart.name,this.cart.price, this.myForm.value.quantity);
      this.router.navigate(['cart']);
      }
}
