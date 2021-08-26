import { Component, ChangeDetectorRef } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase/app'
import { firebaseConfig } from './firebase.config';

import { MenuController } from '@ionic/angular';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  userdata: any={};
  userName: string = '';
    constructor(
    private authService: AuthService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuController: MenuController,
     private cdRef: ChangeDetectorRef
  ) {
    this.initializeApp();

   /* this.authService.getCurrentUser().subscribe(result => {
      this.userdata = result;
      console.log(result);
      });*/
      this.authService.userName.subscribe((userName:string) => {
        this.userName = userName
        this.cdRef.detectChanges();
     
      });
      
  }
  close() {
    this.menuController.close("main");
    }
 
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


   
}
