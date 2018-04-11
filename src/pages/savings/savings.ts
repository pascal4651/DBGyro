import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { forEach } from '@firebase/util';
import { NgIf } from '@angular/common';
import { Gyroscope } from '@ionic-native/gyroscope';

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

  elementdata:any;
currentType = "All";


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
    
    let array = [this.firebaseProvider.getDataList()];
    array.forEach(element => {
     
        this.firebaseProvider.removeItem(element);
    
    
    });
  }
}
