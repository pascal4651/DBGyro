import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';
import * as moment from 'moment';
import { DecimalPipe } from '@angular/common';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

/**
 * Generated class for the GyroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gyro',
  templateUrl: 'gyro.html',
  providers: [Gyroscope,DecimalPipe]
})
export class GyroPage {

  private timer:any;
  private gyroOrientX:any;
  private gyroOrientY:any;
  private gyroOrientZ:any;
  private gyroOrientTime:any;
  myDate = '';

  newItem : {
    Datetime:string,
    Type:string,
    Data:string,
    Discription:string,
  }
  newString = '';
  newGyroString = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,private gyroscope: Gyroscope,
    private decimalPipe: DecimalPipe, public firebaseProvider: FirebaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GyroPage');

    let options: GyroscopeOptions = {
      frequency: 500
   };

 
   this.gyroscope.watch(options)
      .subscribe((orientation: GyroscopeOrientation) => {
        this.gyroOrientX = orientation.x,
        this.gyroOrientY = orientation.y,
        this.gyroOrientZ = orientation.z,
        this.gyroOrientTime = orientation.timestamp;
        
        this.timer = setInterval(() => {
          let now = moment();
          this.myDate = moment(now.format(), moment.ISO_8601).format();
          //this.myDate = new Date().toISOString();
    
          //this.level = this.currentAmplitude | 0
        }, 500);
      
      });
      
  }

  addItem() {
    this.newItem = {
      Datetime: this.myDate,
      Type : "Gyroscope",
      Data: "X: " + this.decimalPipe.transform(this.gyroOrientX,'1.2-2')
        + " Y: " + this.decimalPipe.transform(this.gyroOrientY,'1.2-2')
       + " Z: " +this.decimalPipe.transform(this.gyroOrientZ,'1.2-2'),
      Discription: this.newString,
      
      
    }
    this.firebaseProvider.addItem(this.newItem);
  }

  }


