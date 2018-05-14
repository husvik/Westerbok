import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookInfo } from '../../app/model/BookInfo';

declare var google: any;

/**
 * Generated class for the BookInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-info',
  templateUrl: 'book-info.html',
})
export class BookInfoPage {

  @ViewChild("map") mapRef: ElementRef;
  private map: any;

  selectedBook: BookInfo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedBook = navParams.get("book");
    
  }

  ionViewDidLoad() {
    this.addMap();
  }

  private addMap() {
    let mapLoc = new google.maps.LatLng(this.selectedBook.lat, this.selectedBook.long);
    let mapOpt = {
      center: mapLoc,
      zoom: 15
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, mapOpt);
    this.marker(mapLoc, this.map);
  }

  private marker(position: any, map: any) {
      return new google.maps.Marker({
          position,
          map
      });
  }



}
