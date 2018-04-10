import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BatteryStatus } from '@ionic-native/battery-status';
import * as moment from 'moment';
import { DecimalPipe } from '@angular/common';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

/**
 * Generated class for the BatteryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-battery',
  templateUrl: 'battery.html',
  providers: [BatteryStatus, DecimalPipe]
})
export class BatteryPage {

  private currentLevel:any;
  private isConnected:boolean;
  private myDate:string;
  private timer:any;
  private subscription:any;
  newItem : {
    Datetime:string,
    Type:string,
    Data:string,
    Discription:string,
  }
  newString = '';
  newDbString = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private batteryStatus: BatteryStatus,
    private decimalPipe: DecimalPipe, public firebaseProvider: FirebaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BatteryPage');

    const subscription = this.batteryStatus.onChange().subscribe(status => {
      console.log(status.level, status.isPlugged);
   });
    
    this.timer = setInterval(() => {
      let now = moment();
      this.myDate = moment(now.format(), moment.ISO_8601).format();
    }, 500);
  }

  ionViewWillLeave(){
    console.log('ionViewWilLeave DbmeterPage');
  
    clearInterval(this.timer);
    this.subscription.unsubscribe();
  }

  addItem() {
    this.newItem = {
      Datetime: this.myDate,
      Type : "Battery",
      Data: this.decimalPipe.transform(this.currentLevel,'1.2-2'),
      Discription: this.newString,
    }
    this.firebaseProvider.addItem(this.newItem);
  }
}
