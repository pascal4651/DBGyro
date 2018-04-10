import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { forEach } from '@firebase/util';

/**
 * Generated class for the SavingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-savings',
  templateUrl: 'savings.html',
})
export class SavingsPage {
  listItems: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    this.listItems = this.firebaseProvider.getDataList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SavingsPage');
  }

  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }
  removeItems(){
    
  }
}
