import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TabBarPage } from "../pages/tab-bar/tab-bar";
import { AngularFirestore } from 'angularfire2/firestore';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
  private angularFirestore: AngularFirestore) {

    this.angularFirestore.app.auth().onAuthStateChanged((user) => {
      if (user) {
        this.rootPage = TabBarPage;
      } else {
        this.rootPage = HomePage;
      }
    })

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

