import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';
import { CartPage } from './cart.page';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CartPageRoutingModule,
   AgmCoreModule.forRoot({
    apiKey: 'AIzaSyDu7hsKFjI6kXZLNWQaibYe4FqshS_xEpw', 
    libraries: ['places']
  })
],
  declarations: [CartPage]
})
export class CartPageModule {}
