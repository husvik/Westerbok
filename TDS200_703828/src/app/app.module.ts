import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SellBookPage } from "../pages/sell-book/sell-book";
import { TabBarPage } from "../pages/tab-bar/tab-bar";
import { FeedPage } from "../pages/feed/feed";

import { SellBookPageModule } from "../pages/sell-book/sell-book.module";
import { TabBarPageModule } from "../pages/tab-bar/tab-bar.module";
import { FeedPageModule } from "../pages/feed/feed.module";

import { Geolocation } from "@ionic-native/geolocation";

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";

import firebaseEnviroment from "./firebaseEnviroment";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseEnviroment),
    AngularFirestoreModule,
    AngularFireAuthModule,
    SellBookPageModule,
    TabBarPageModule,
    FeedPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SellBookPage,
    TabBarPage,
    FeedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
