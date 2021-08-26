import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule,} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartdetailsPageRoutingModule } from './cartdetails-routing.module';

import { CartdetailsPage } from './cartdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartdetailsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CartdetailsPage]
})
export class CartdetailsPageModule {}
