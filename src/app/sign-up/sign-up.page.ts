import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private authService:AuthService, private router:Router,
    private alertCtrl:AlertController) { }

  ngOnInit() {
  }
  
    signup(form) {
    this.authService.signup(form.value.email, form.value.password, form.value.username);
    this.router.navigateByUrl('home');
    
  }
    

}
