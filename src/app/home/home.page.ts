import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular';

import { WesternService } from '../western.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Western: any = [];

  constructor( private router:Router, private alertController: AlertController, private westernService: WesternService,
      private formBuilder: FormBuilder) {
        // subscribe allows the data to be fetched whenever there is any changes to the data
 westernService.getAll().subscribe((data) => {this.Western = data;});
       }
    
 
}
