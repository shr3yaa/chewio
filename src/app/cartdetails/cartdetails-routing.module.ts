import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartdetailsPage } from './cartdetails.page';

const routes: Routes = [
  {
    path: '',
    component: CartdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartdetailsPageRoutingModule {}
