import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SellBookPage } from "../sell-book/sell-book";
import { FeedPage } from "../feed/feed";

/**
 * Generated class for the TabBarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-bar',
  templateUrl: 'tab-bar.html',
})
export class TabBarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabBarPage');
  }

  root1 = FeedPage;
  root2 = SellBookPage;

}
