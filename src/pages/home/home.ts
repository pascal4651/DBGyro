import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DbmeterPage } from '../dbmeter/dbmeter';
import { GyroPage } from '../gyro/gyro';
import { BatteryPage } from '../battery/battery';
import { TtsPage } from '../tts/tts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  dbmeterClick(){
    this.navCtrl.push(DbmeterPage);
  }

  gyroClick(){
    this.navCtrl.push(GyroPage);
  }

  batteryClickk(){
    this.navCtrl.push(BatteryPage);
  }

  ttsClick(){
    this.navCtrl.push(TtsPage);
  }
}
