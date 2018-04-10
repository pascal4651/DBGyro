import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';

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
  providers: [Gyroscope]
})
export class GyroPage {

  private gyroOrientX:any;
  private gyroOrientY:any;
  private gyroOrientZ:any;
  private gyroOrientTime:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private gyroscope: Gyroscope) {
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
      
      });
  }


  }


