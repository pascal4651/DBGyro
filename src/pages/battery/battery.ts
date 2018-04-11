import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
  private isPlugged:boolean;
  private myDate:string;
  private timer:any;
  private subscription:any;
  private newItem : {
    Datetime:string,
    Type:string,
    Data:string,
    Discription:string,
  }
  private newString = '';
  private newDbString = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private batteryStatus: BatteryStatus,
    private decimalPipe: DecimalPipe, public firebaseProvider: FirebaseProvider,
    private toastController: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BatteryPage');

    this.subscription = this.batteryStatus.onChange().subscribe(status => {
      this.currentLevel = status.level;
      this.isPlugged = status.isPlugged;
      //console.log(status.level, status.isPlugged);
   });
    
    this.timer = setInterval(() => {
      let now = moment();
      this.myDate = moment(now.format(), moment.ISO_8601).format();
    }, 500);
  }

  ionViewWillLeave(){
    console.log('ionViewWilLeave BatteryPage');
  
    clearInterval(this.timer);
    this.subscription.unsubscribe();
  }

  addItem() {
    this.newItem = {
      Datetime: this.myDate,
      Type : "Battery",
      Data: this.currentLevel + "% " + (this.isPlugged?"Plugged":"Not plugged"),
      Discription: this.newString,
    }
    this.firebaseProvider.addItem(this.newItem);
    this.newString='';
    this.toastController.create({
      message: 'Data is saved',
      duration: 2000
    }).present();
  }
}
