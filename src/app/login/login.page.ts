import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ok } from 'assert';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService:AuthService, private router:Router,
    private alertCtrl:AlertController) { }

  ngOnInit() {
  }
login(form){
  this.authService.login(form.value.email, form.value.password );
  this.router.navigateByUrl('home');
}
goToReset(){
  this.router.navigateByUrl('password-reset');
}
goTosignUp(){
  this.router.navigateByUrl('sign-up');
}
}
