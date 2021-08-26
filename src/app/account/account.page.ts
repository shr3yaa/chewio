import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage  {

  constructor(private authService:AuthService, private router:Router,
    private alertCtrl:AlertController, private themeService:ThemeService) { }

    async logOut():Promise<void>{
      this.authService.logOutUser().
      then(
        ()=>{
          this.router.navigateByUrl('login');
        },
        async error => {
          const alert = await this.alertCtrl.create({
            message:error.message,
            buttons:[{text:'ok', role:'cancel'}]
          });
          await alert.present();
        }
      );
      }
      toggleDarkMode(){
        this.themeService.toggleAppTheme();
      }
  }