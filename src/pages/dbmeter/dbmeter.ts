import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DBMeter } from '@ionic-native/db-meter';
import * as moment from 'moment';
import { DecimalPipe } from '@angular/common';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

/**
 * Generated class for the DbmeterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dbmeter',
  templateUrl: 'dbmeter.html',
  providers: [DBMeter, DecimalPipe]
})
export class DbmeterPage {

  private currentAmplitude:any;
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
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private dbMeter: DBMeter,
    private decimalPipe: DecimalPipe, private firebaseProvider: FirebaseProvider,
    private toastController: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DbmeterPage');

    //this.subscription = this.dbMeter.start().subscribe(data => this.currentAmplitude = this.decimalPipe.transform(data,'1.2-2'));
    
    this.subscription = this.dbMeter.start().subscribe(data =>
      this.currentAmplitude = data);
    
    this.timer = setInterval(() => {
      let now = moment();
      this.myDate = moment(now.format(), moment.ISO_8601).format();
      //this.myDate = new Date().toISOString();
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
      Type : "DBMeter",
      Data: this.decimalPipe.transform(this.currentAmplitude,'1.2-2') + "dB",
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
