import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { BookInfo } from '../../app/model/BookInfo';
import { AngularFirestore } from 'angularfire2/firestore';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  books: Observable<BookInfo[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private af: AngularFirestore) {
    this.getBooks();
  }

  getBooks() {
    this.books = this.af.collection("bookCollection").snapshotChanges()
    .map((actions) => {
      return actions.map((action) => {
        let data = action.payload.doc.data() as BookInfo;
        let id = action.payload.doc.id;
        return {
            id,
            ... data
        };
      });
    });
  }

  goToDesc(book: BookInfo) {
    this.navCtrl.push("BookInfoPage", {"book": book});
  }
  

}
