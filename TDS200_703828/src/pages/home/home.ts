import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GeoLocGetter } from '../../app/model/GeoLocGetter';
import { Subscriber } from 'rxjs/Subscriber'
import { Geolocation } from '@ionic-native/geolocation'
import { AngularFirestore } from 'angularfire2/firestore';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  email: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private af: AngularFirestore) {
      
  }

  login() {
    this.af.app.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
        console.log("SUCCESS!");
    }).catch((error) => {
      console.log("ERROR");
    })
  }

  signUp() {
    console.log("Email: " + this.email);
    console.log("Password: " + this.password);
    this.af.app.auth().createUserWithEmailAndPassword(this.email, this.password)
    .then((response) => {
      console.log("SUCCESS!");
    }).catch((error) => {
      console.log("FAILED!" + JSON.stringify(error));
    });
  }


}
