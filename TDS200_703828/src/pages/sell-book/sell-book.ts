import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { GeoLocGetter } from '../../app/model/GeoLocGetter';
import { Geolocation } from '@ionic-native/geolocation'
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the SellBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sell-book',
  templateUrl: 'sell-book.html',
})
export class SellBookPage {

  name: string;
  author: string;
  contact: string;
  extraInfo: string;
  price: string;
  geo: GeoLocGetter;
  searchValue:string = '';

  loading: Loading;
  

  constructor(public toastController: ToastController, public navCtrl: NavController, public navParams: NavParams, 
    private af: AngularFirestore, private geoLocation: Geolocation,
    private loadingScreen: LoadingController) {
      this.geo = new GeoLocGetter(this.geoLocation);
  }

  sellBook() {
    this.addLoadingScreen();
    this.geo.getCurrentLocation((long, lat) => {
        console.log("LONG: " + long);
        console.log("LAT: " + lat);
        this.af.collection("bookCollection").add({
          "name": this.name,
          "author": this.author,
          "contact": this.af.app.auth().currentUser.email,
          "extraInfo": this.extraInfo,
          "price": this.price,
          "lat": lat,
          "long": long
        }).then(() => {
          console.log("THE BOOK IS ADDED");
          this.loading.dismiss();
          this.addToast();
          this.name = "";
          this.author= "";
          this.extraInfo= "";
          this.price= "";
        }).catch((error) => {
          console.log("THE BOOK IS NOT ADDED");
        });
      
    });
    
    
  }

  logOut() {
    this.af.app.auth().signOut();
  }

  addLoadingScreen() {
    this.loading = this.loadingScreen.create({
      content: "Publiserer"
    });
    this.loading.present();
  }

  addToast() {
    let toast = this.toastController.create({
      message: 'Boka er lagt til',
      duration: 1500
    });
    toast.present();
  }


  

}
